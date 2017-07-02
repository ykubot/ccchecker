import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import CryptCurrencyList from './components/CryptCurrencyList';
import CryptCurrencyDetail from './components/CryptCurrencyDetail';

const RouterComponent = () => {
    return(
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="root">
                <Scene
                    key="cryptCurrencyList"
                    component={CryptCurrencyList}
                    title="CC checker"
                    initial
                />

                <Scene
                    key="cryptCurrencyDetail"
                    component={CryptCurrencyDetail}
                    title="Coin Detail"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
