import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { priceInitialized, coinPriceChanged, jpyPriceChanged } from '../actions';
import { Input } from './common';
import { FacebookAds } from 'expo';
import { PLACEMENT_ID_IOS, PLACEMENT_ID_ANDROID } from './FacebookAds';

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

                { (Platform.OS === 'ios') &&
                <FacebookAds.BannerView
                    style={styles.banner}
                    placementId={PLACEMENT_ID_IOS}
                    type="standard"
                    onPress={() => console.log('click')}
                    onError={(err) => console.log('error', err)}
                />
                }
                {/* { (Platform.OS === 'android') && */}
                {/* <FacebookAds.BannerView
                    style={styles.banner}
                    placementId={PLACEMENT_ID_ANDROID}
                    type="standard"
                    onPress={() => console.log('click')}
                    onError={(err) => console.log('error', err)}
                /> */}
                {/* } */}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#00B7C3',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingBottom: 50
    },
    banner: {
      position: 'absolute',
      bottom: 20
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
