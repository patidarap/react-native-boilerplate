import React, {FC} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {TabNavigationWithAppStackScreenProps} from '@types';
import {colors, perfectSize} from '@theme';
import {fonts} from '@fonts';
import {PrimaryButton, PrimaryText} from '@components';
import {useTranslation} from 'react-i18next';
import {dispatch, resetUserData, setLanguage} from '@appRedux';

const Profile: FC<TabNavigationWithAppStackScreenProps<'Profile'>> = ({
  navigation,
}) => {
  const {t: translate} = useTranslation();

  const handleChangeLanguage = () => {
    Alert.alert(
      'Change Language',
      'Are you sure you want to change language?',
      [
        {
          text: translate('profileScreen.cancel'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: translate('languages.en'),
          onPress: async () => dispatch(setLanguage('en')),
        },
        {
          text: translate('languages.es'),
          onPress: async () => dispatch(setLanguage('es')),
        },
      ],
    );
  };

  return (
    <View style={styles.mainView}>
      <PrimaryText style={styles.lblLoginScreen}>
        {translate('profileScreen.profileScreen')}
      </PrimaryText>
      <PrimaryButton
        label={translate('profileScreen.changeLanguage')}
        onPress={handleChangeLanguage}
      />
      <PrimaryButton
        label={translate('profileScreen.logout')}
        onPress={() => dispatch(resetUserData())}
      />
    </View>
  );
};

export default Profile;

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
