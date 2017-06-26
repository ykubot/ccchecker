import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import CryptCurrencyList from './src/components/CryptCurrencyList';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header headerText="Coincheck checker" />
                <CryptCurrencyList />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
}
