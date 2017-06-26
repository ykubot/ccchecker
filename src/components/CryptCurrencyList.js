import React, { Component } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';
import { Spinner } from './common';
import {
    BTC, ETH, ETC, DAO, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH
} from './CoinTypes';

class CryptCurrencyList extends Component {

    render() {
        return(
            <ScrollView>
                <View style={styles.containerStyle}>
                    <ListItem coin={BTC} />
                    <ListItem coin={ETH} />
                    <ListItem coin={ETC} />
                    <ListItem coin={LISK} />
                    <ListItem coin={FACT} />
                    <ListItem coin={MONERO} />
                    <ListItem coin={AUGUR} />
                    <ListItem coin={RIPPLE} />
                    <ListItem coin={ZCASH} />
                    <ListItem coin={NEM} />
                    <ListItem coin={LTC} />
                    <ListItem coin={DASH} />
                </View>
            </ ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
}

export default CryptCurrencyList;
