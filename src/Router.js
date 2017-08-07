import React from 'react';
import { Text, Platform } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import CryptCurrencyList from './components/CryptCurrencyList';
import CryptCurrencyDetail from './components/CryptCurrencyDetail';
import settingsModal from './components/settingsModal';
import CloseButton from './components/common/CloseButton';
import {HEADER_HEIGHT_IOS, HEADER_HEIGHT_ANDROID} from './constants/Constants';

const RouterComponent = () => {
    return(
        <Router navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle} sceneStyle={styles.sceneStyle}>
            <Scene key="root">
                <Scene
                    key="cryptCurrencyList"
                    component={CryptCurrencyList}
                    title="CC Checker"
                    onRight={() => Actions.settingsModal()}
                    rightTitle="Settings"
                    initial
                />

                <Scene
                    key="cryptCurrencyDetail"
                    component={CryptCurrencyDetail}
                    title="Coin Detail"
                />

            </Scene>
            <Scene
                key="settingsModal"
                direction="vertical"
                renderBackButton={() => <CloseButton />}
                component={settingsModal}
                schema="modal"
                title="Settings"
            />
        </Router>
    );
};

const styles = {
    navBarStyle: {
        flex: 1,
        backgroundColor: '#00B7C3',
        paddingTop: Platform.select({
            ios: 0,
            android: 20
        }),
        height: Platform.select({
            ios: HEADER_HEIGHT_IOS,
            android: HEADER_HEIGHT_ANDROID
        }),
    },
    titleStyle: {
        color: '#FFFFFF'
    },
    sceneStyle: {
        paddingTop: Platform.select({
            ios: HEADER_HEIGHT_IOS,
            android: HEADER_HEIGHT_ANDROID
        }),
    }
}

export default RouterComponent;
