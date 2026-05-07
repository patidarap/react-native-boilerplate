import { DefaultTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet } from "react-native";

export const { height: deviceHeight, width: deviceWidth } =
  Dimensions.get("window");
export const MOCKUP_HEIGHT = 932; // This should be changed with the app design
export const MOCKUP_WIDTH = 430; // This should be modified with the app design

/**
 *
 * @param pixel To enter the width as per the design to make it pixel perfect
 * @returns
 */
export const W = (pixel: number) => {
  return (pixel * deviceWidth) / MOCKUP_WIDTH;
};

/**
 *
 * @param pixel to enter the height as per the design to make it pixel perfect
 * @returns
 */
export const H = (pixel: number) => {
  return (pixel * deviceHeight) / MOCKUP_HEIGHT;
};

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  black50: "#00000050",
  black60: "#00000060",
};

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    background: "#ffffff",
    primary: "#ffffff",
    card: "#ffffff",
    text: "#ffffff",
    border: "#ffffff",
    notification: "#ffffff",
  },
};

export const fontFamily = {
  black: "Inter-Black",
  bold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
  extraLight: "Inter-ExtraLight",
  light: "Inter-Light",
  medium: "Inter-Medium",
  primary: "Inter-Regular",
  semiBold: "Inter-SemiBold",
  thin: "Inter-Thin",
};

export const ComponentsMatrix = {
  borderRadiusBtn: W(5),
  BORDER_RADIUS_TEXT_INPUT: W(6),
  COMMON_BOTTOM_MARGIN: H(37),
  COMMON_MARGIN_HORIZONTAL_25: W(25),
  COMMON_MARGIN_HORIZONTAL_13: W(13),
  buttonContainer: H(50),
  COMPONENT_HEIGHT: H(50),
  BUTTON_HEIGHT: H(42),
  TEXT_INPUT_HEIGHT: H(40),
  VERTICAL_PADDING: H(10),
  HIGHT_20: H(20),
  COMMON_PADDING: 20,
};

export const desiredFonts = (
  type: string,
  fontSize: number,
  color?: string,
  lineHeight?: number | undefined
) => {
  return {
    fontFamily: type,
    fontSize: W(fontSize),
    ...(color && { color }),
    // ...(lineHeight && {lineHeight: H(lineHeight)}),
  };
};
export const commonStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex1: {
    flex: 1,
  },
  centerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  defaultShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 8,
  },
  iconContainer: {
    aspectRatio: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  debugger: {
    position: "absolute",
    width: 1,
    backgroundColor: "red",
    top: 0,
    bottom: 0,
  },
  padding20: {
    padding: 20,
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  removePadding: {
    padding: undefined,
    paddingBottom: undefined,
    paddingEnd: undefined,
    paddingHorizontal: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingStart: undefined,
    paddingTop: undefined,
    paddingVertical: undefined,
  },
  removeMargin: {
    margin: undefined,
    marginBottom: undefined,
    marginEnd: undefined,
    marginHorizontal: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginStart: undefined,
    marginTop: undefined,
    marginVertical: undefined,
  },
  textInputStyle: {
    ...desiredFonts(fontFamily.primary, 12, colors.black, undefined),
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
