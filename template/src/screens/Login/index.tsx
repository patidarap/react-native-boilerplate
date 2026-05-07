import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackScreenRouteProp} from '@apptypes';
import {colors} from '@theme';
import {PrimaryText} from '@components';
import {strings} from '@appi18n';

const LogIn: FC<StackScreenProps<StackScreenRouteProp, 'LogIn'>> = ({
  navigation,
  route,
}) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <PrimaryText>{strings.logInScreen.lblLogInScreen}</PrimaryText>
    </SafeAreaView>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
