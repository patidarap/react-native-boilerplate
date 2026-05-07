import {SafeAreaView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {TabScreenRouteProp} from '@apptypes';
import {colors} from '@theme';
import {PrimaryText} from '@components';
import {strings} from '@appi18n';

const Home: FC<StackScreenProps<TabScreenRouteProp, 'Home'>> = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <PrimaryText>{strings.homeScreen.lblHomeScreen}</PrimaryText>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
