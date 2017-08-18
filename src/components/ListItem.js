import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Spinner } from './common';
import {
    BTC, ETH, ETC, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH, BCH
} from './CoinTypes';
const BASE_COLOR = '#FFFFFF';
const UP_COLOR = '#64FFDA';
const DOWN_COLOR = '#FF1744';

class ListItem extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.coin);
        this.state = {
            isLoading: true,
            backgroundColor: BASE_COLOR,
            name: this.props.coin,
            jpy_rate: '0',
            btc_rate: '0'
        }
    }

    componentWillMount() {
        this.coinsFetch(this.props.coin);
    }

    componentDidMount() {
        // 15秒ごとに値を更新
        setInterval(() => {
            this.coinsFetch(this.props.coin);
        }, 10000);
    }

    coinsFetch(coin) {
        const apiUrl = "https://coincheck.com/api/rate/";
        // console.log(`${apiUrl}${coin}_jpy`);
        fetch(`${apiUrl}${coin}_jpy`)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log('JPY Rate:');
                // console.log(responseData);
                let jpy_rate = responseData.rate;
                if (coin !== 'btc') {
                    fetch(`${apiUrl}${coin}_btc`)
                        .then((response) => response.json())
                        .then((responseData) => {
                            // console.log('BTC Rate:');
                            // console.log(responseData);
                            let coinRate = {
                                jpy_rate: jpy_rate,
                                btc_rate: responseData.rate
                            };
                            this.onFetchSuccess(coin, coinRate);
                        });
                } else {
                    let coinRate = {
                        jpy_rate: jpy_rate
                    };
                    this.onFetchSuccess(coin, coinRate);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onFetchSuccess(coin, coinRate) {
        // BTC, ETH, ETC, DAO, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH
        let oldRate = this.state.jpy_rate;
        switch(coin) {
            case BTC:
                this.setState({
                    isLoading: false,
                    backgroundColor: this.compareRate(oldRate, coinRate.jpy_rate),
                    jpy_rate: coinRate.jpy_rate
                });
                setTimeout(() => {
                    this.setState({ backgroundColor: BASE_COLOR });
                }, 500);
            default:
                this.setState({
                    isLoading: false,
                    backgroundColor: this.compareRate(oldRate, coinRate.jpy_rate),
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
                setTimeout(() => {
                    this.setState({ backgroundColor: BASE_COLOR });
                }, 500);
        }
    }

    compareRate(oldRate, nextRate) {
        if (nextRate == 0 || nextRate == oldRate) {
            return BASE_COLOR;
        }
        return (nextRate > oldRate) ? UP_COLOR : DOWN_COLOR;
    }

    onRenderIcon(coin) {

        switch(coin) {
            case BTC:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_btc.png')}
                    />
                );
            case ETH:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_eth.png')}
                    />
                );
            case ETC:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_etc.png')}
                    />
                );
            case LISK:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_lsk.png')}
                    />
                );
            case FACT:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_fct.png')}
                    />
                );
            case MONERO:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_xmr.png')}
                    />
                );
            case AUGUR:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_rep.png')}
                    />
                );
            case RIPPLE:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_xrp.png')}
                    />
                );
            case ZCASH:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_zec.png')}
                    />
                );
            case NEM:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_xem.png')}
                    />
                );
            case LTC:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_ltc.png')}
                    />
                );
            case DASH:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_dash.png')}
                    />
                );
            case BCH:
                return (
                    <Image
                        style={styles.iconStyle}
                        source={require('../../assets/coin-icons/png/icon_bch.png')}
                    />
                );
        }
    }

    onRowPress() {
        Actions.cryptCurrencyDetail({
            title: this.convertCoinName(this.state.name),
            coin: this.convertCoinName(this.state.name),
            unit: (this.state.name).toUpperCase(),
            jpy_rate: parseFloat(this.state.jpy_rate).toFixed(3).toString()
        });
    }

    convertCoinName(coin) {
        switch (coin) {
            case BTC:
                return 'Bitcoin';
            case ETH:
                return 'Ethereum';
            case ETC:
                return 'Ethereum Classic';
            case LISK:
                return 'LISK';
            case FACT:
                return 'Factom';
            case MONERO:
                return 'Monero';
            case AUGUR:
                return 'Augur';
            case RIPPLE:
                return 'Ripple';
            case ZCASH:
                return 'Zcash';
            case NEM:
                return 'NEM';
            case LTC:
                return 'LTC';
            case DASH:
                return 'Dash';
            case BCH:
                return 'Bitcoin Cash';
        }
    }

    render() {
        if (this.state.isLoading || !this.state.name) {
            return (
                <View style={styles.containerStyle}>
                    <Spinner size='small'/>
                </View>
            );
        }

        if (this.props.coin === 'btc') {
            return(
                <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                    <View style={[styles.containerStyle, { backgroundColor: `${this.state.backgroundColor}` }]}>
                        <View>
                            { this.onRenderIcon(this.props.coin) }
                        </View>

                        <View>
                            <Text style={styles.titleStyle}>
                                { this.convertCoinName(this.state.name) }
                            </Text>
                        </View>

                        <View style={styles.ratesStyle}>
                            <View style={styles.rateStyle}>
                                <Text style={styles.rateTextStyle}>
                                    { parseFloat(this.state.jpy_rate).toFixed(3) }
                                </Text>
                                <Text style={styles.unitTextStyle}>JPY</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            );
        }

        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={[styles.containerStyle, { backgroundColor: `${this.state.backgroundColor}` }]}>
                    <View>
                        { this.onRenderIcon(this.props.coin) }
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>
                            { this.convertCoinName(this.state.name) }
                        </Text>
                    </View>

                    <View style={styles.ratesStyle}>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                { parseFloat(this.state.jpy_rate).toFixed(3) }
                            </Text>
                            <Text style={styles.unitTextStyle}>JPY</Text>
                        </View>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                { this.state.btc_rate }
                            </Text>
                            <Text style={styles.unitTextStyle}>BTC</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        height: 60,
        borderBottomWidth: 1,
        padding: 12,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#4DD0E1',
        position: 'relative'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    ratesStyle: {
        marginLeft: 'auto'
    },
    rateStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center'
    },
    rateTextStyle: {
        fontSize: 15
    },
    unitTextStyle: {
        paddingLeft: 5,
        fontSize: 12,
        color: '#7f8c8d'
    }
};

export default ListItem;
