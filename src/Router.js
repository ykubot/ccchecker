import React from 'react';
import { Text, Platform } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import CryptCurrencyList from './components/CryptCurrencyList';
import CryptCurrencyDetail from './components/CryptCurrencyDetail';
import SettingsModal from './components/SettingsModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import CloseButton from './components/common/CloseButton';
import SettingsButton from './components/common/SettingsButton';
import {HEADER_HEIGHT_IOS, HEADER_HEIGHT_ANDROID} from './constants/Constants';

const RouterComponent = () => {
    return(
        <Router navigationBarStyle={styles.navBarStyle} titleStyle={styles.titleStyle} sceneStyle={styles.sceneStyle}>
            <Scene key="root">
                <Scene
                    key="cryptCurrencyList"
                    component={CryptCurrencyList}
                    title="CC Checker"
                    // onRight={() => Actions.settingsModal()}
                    // rightTitle="Settings"
                    renderRightButton={() => <SettingsButton />}
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
                component={SettingsModal}
                schema="modal"
                title="Settings"
            >
            </Scene>
            <Scene
                key="privacyPolicy"
                component={PrivacyPolicy}
                title="Privacy Policy"
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
