import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { priceInitialized, coinPriceChanged, jpyPriceChanged } from '../actions';
import { Input } from './common';

class CryptCurrencyDetail extends Component {

    componentWillMount() {
        this.props.priceInitialized();
    }

    onCoinPriceChange(price) {
        this.props.coinPriceChanged(price);
        this.props.jpyPriceChanged(this.exchangeCoinToJpy(price));
    }

    onJpyPriceChange(price) {
        this.props.jpyPriceChanged(price);
        this.props.coinPriceChanged(this.exchangeJpyToCoin(price));
    }

    exchangeCoinToJpy(price) {
        return price > 0 ? (price * this.props.jpy_rate).toFixed(3).toString() : "0";
    }

    exchangeJpyToCoin(price) {
        return price > 0 ? (price / this.props.jpy_rate).toFixed(3).toString() : "0";
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Input
                    label={this.props.unit}
                    placeholder="0.0"
                    onChangeText={this.onCoinPriceChange.bind(this)}
                    value={this.props.coin_price}
                />

                <Input
                    label="JPY"
                    placeholder="0.0"
                    onChangeText={this.onJpyPriceChange.bind(this)}
                    value={this.props.jpy_price}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#00B7C3',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
}

const mapStateToProps = ({ cryptCurrency }) => {
    const { coin_price, jpy_price } = cryptCurrency;

    return { coin_price, jpy_price };
}

export default connect(mapStateToProps, {
    priceInitialized,
    coinPriceChanged,
    jpyPriceChanged
})(CryptCurrencyDetail);
