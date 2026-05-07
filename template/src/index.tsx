import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {commonStyles} from '@theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {CustomLoader} from '@components';
import MainNavigation from './navigation/MainNavigation';
import store from '@appredux';

const App: FC = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={commonStyles.flex1}>
        <MainNavigation />
        <CustomLoader />
        <FlashMessage position={'top'} />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
