import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {AuthStackScreenProps} from '@types';
import {colors, perfectSize} from '@theme';
import {PrimaryButton, PrimaryText} from '@components';
import {fonts} from '@fonts';
import {showDangerMessage} from '@common';
import {useTranslation} from 'react-i18next';
import {dispatch, initialState, setUserData} from '@appRedux';

const LogIn: FC<AuthStackScreenProps<'LogIn'>> = ({navigation}) => {
  const {t: translate} = useTranslation();
  return (
    <View style={styles.mainView}>
      <PrimaryText style={styles.lblLoginScreen}>
        {translate('loginScreen.loginScreen')}
      </PrimaryText>
      <PrimaryButton
        label={translate('loginScreen.login')}
        onPress={() => {
          dispatch(setUserData(initialState.userData));
        }}
      />
      <PrimaryButton
        label={translate('loginScreen.showErrorMessage')}
        onPress={() => {
          showDangerMessage(translate('validations.testError'));
        }}
      />
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: perfectSize(20),
  },
  lblLoginScreen: {
    fontFamily: fonts.bold,
    fontSize: perfectSize(20),
  },
});
