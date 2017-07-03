import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import CryptCurrencyList from './components/CryptCurrencyList';
import CryptCurrencyDetail from './components/CryptCurrencyDetail';

const RouterComponent = () => {
    return(
        <Router navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle} sceneStyle={styles.sceneStyle}>
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

const styles = {
    navBarStyle: {
        backgroundColor: '#00B7C3'
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    sceneStyle: {
        paddingTop: 65
    }
}

export default RouterComponent;
