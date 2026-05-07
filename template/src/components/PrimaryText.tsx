import {colors, desiredFonts, fontFamily} from '@theme';
import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface PrimaryTextProps extends TextProps {}

const PrimaryText: FC<PrimaryTextProps> = ({children, ...props}) => {
  return (
    <Text style={[styles.textStyle, props.style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    includeFontPadding: false,
    ...desiredFonts(fontFamily.primary, 18, colors.black),
  },
});

export default PrimaryText;
