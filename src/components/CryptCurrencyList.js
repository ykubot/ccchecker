import React, { Component } from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import ListItem from './ListItem';
import {
    BTC, ETH, ETC, DAO, LISK, FACT, MONERO, AUGUR, RIPPLE, ZCASH, NEM, LTC, DASH
} from './CoinTypes';
import { FacebookAds } from 'expo';
import { PLACEMENT_ID_IOS, PLACEMENT_ID_ANDROID } from './FacebookAds';

class CryptCurrencyList extends Component {

    render() {
        return(
            <View>
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

                { (Platform.OS === 'ios') &&
                <View>
                    <FacebookAds.BannerView
                        style={styles.banner}
                        placementId={PLACEMENT_ID_IOS}
                        type="standard"
                        onPress={() => console.log('click')}
                        onError={(err) => console.log('error', err)}
                    />
                </View>
                }
                { (Platform.OS === 'android') &&
                <View>
                    <FacebookAds.BannerView
                        style={styles.banner}
                        placementId={PLACEMENT_ID_ANDROID}
                        type="standard"
                        onPress={() => console.log('click')}
                        onError={(err) => console.log('error', err)}
                    />
                </View>
                }

            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingBottom: 50
    },
    banner: {
        position: 'absolute',
        bottom: 20
    }
}

export default CryptCurrencyList;
