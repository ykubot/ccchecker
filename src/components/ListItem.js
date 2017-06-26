import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import { Svg } from 'react-native-svg';
import { Spinner } from './common';
import {
    BTC, ETH, ETC, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH
} from './CoinTypes';

class ListItem extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.coin);
        this.state = {
            isLoading: true,
            name: this.props.coin,
            jpy_rate: '0',
            btc_rate: '0'
        }
    }

    componentWillMount() {
        this.imageUrl = '../../assets/coin-icons/png/icon_btc.png';
        this.coinsFetch(this.props.coin);
    }

    coinsFetch(coin) {
        const apiUrl = "https://coincheck.com/api/rate/";
        console.log(`${apiUrl}${coin}_jpy`);
        fetch(`${apiUrl}${coin}_jpy`)
            .then((response) => response.json())
            .then((responseData) => {
                console.log('JPY Rate:');
                console.log(responseData);
                let jpy_rate = responseData.rate;
                if (coin !== 'btc') {
                    fetch(`${apiUrl}${coin}_btc`)
                        .then((response) => response.json())
                        .then((responseData) => {
                            console.log('BTC Rate:');
                            console.log(responseData);
                            let coinRate = {
                                jpy_rate: jpy_rate,
                                btc_rate: responseData.rate
                            };
                            this.onFetchSuccess(coin, coinRate);
                        });
                } else {
                    console.log('This is BTC');
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
        console.log('onFetchSuccess');
        // BTC, ETH, ETC, DAO, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH
        switch(coin) {
            case BTC:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate
                });
            case ETH:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case ETC:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case LISK:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case FACT:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case MONERO:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case AUGUR:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case RIPPLE:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case ZCASH:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case NEM:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case LTC:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
            case DASH:
                this.setState({
                    isLoading: false,
                    jpy_rate: coinRate.jpy_rate,
                    btc_rate: coinRate.btc_rate
                });
        }
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
                <View style={styles.containerStyle}>
                    <View>
                        { this.onRenderIcon(this.props.coin) }
                    </View>

                    <View>
                        <Text style={styles.titleStyle}>
                            { (this.state.name).toUpperCase() }
                        </Text>
                    </View>

                    <View style={styles.ratesStyle}>
                        <View style={styles.rateStyle}>
                            <Text style={styles.rateTextStyle}>
                                { parseFloat(this.state.jpy_rate).toFixed(4) }
                            </Text>
                            <Text style={styles.unitTextStyle}>JPY</Text>
                        </View>
                    </View>
                </View>
            );
        }

        return(
            <View style={styles.containerStyle}>
                <View>
                    { this.onRenderIcon(this.props.coin) }
                </View>

                <View>
                    <Text style={styles.titleStyle}>
                        { (this.state.name).toUpperCase() }
                    </Text>
                </View>

                <View style={styles.ratesStyle}>
                    <View style={styles.rateStyle}>
                        <Text style={styles.rateTextStyle}>
                            { parseFloat(this.state.jpy_rate).toFixed(4) }
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
