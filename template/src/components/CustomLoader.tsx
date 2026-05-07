import React, {FC} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {W, colors} from '@theme';
import {useSelector} from 'react-redux';
import {RootState} from '@appredux';

interface CustomLoaderProps {
  isLocalLoading?: boolean;
}

const CustomLoader: FC<CustomLoaderProps> = ({isLocalLoading = false}) => {
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);
  const isVisible = isLoading || isLocalLoading;
  return (
    <Modal animationType="none" transparent={true} visible={isVisible}>
      <View style={[styles.container, StyleSheet.absoluteFill]}>
        <View style={styles.whiteBox}>
          <ActivityIndicator color={colors.black} size={40} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black60,
  },
  whiteBox: {
    aspectRatio: 1,
    backgroundColor: 'white',
    height: W(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: W(5),
  },
});
export default CustomLoader;
