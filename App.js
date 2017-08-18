import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common';
import Router from './src/Router';
import reducers from './src/reducers';
import CryptCurrencyList from './src/components/CryptCurrencyList';

export default class App extends React.Component {
    render() {
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

// const styles = {
//     containerStyle: {
//         flex: 1,
//         backgroundColor: '#FFFFFF'
//     }
// }
