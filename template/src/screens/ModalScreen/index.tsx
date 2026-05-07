import {SafeAreaView, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StackScreenRouteProp} from '@apptypes';
import {colors} from '@theme';
import {PrimaryText} from '@components';
import {strings} from '@appi18n';

const ModalScreen: FC<
  StackScreenProps<StackScreenRouteProp, 'ModalScreen'>
> = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <PrimaryText>{strings.modalScreen.lblModalScreen}</PrimaryText>
    </SafeAreaView>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.black60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
