import { StackActions } from "@react-navigation/native";
// import moment from 'moment';
import { Alert, Linking, NativeScrollEvent, Platform } from "react-native";
import FlashMessage, {
  MessageOptions,
  showMessage,
} from "react-native-flash-message";
import {
  Asset,
  launchImageLibrary,
  launchCamera,
} from "react-native-image-picker";
import isEmpty from "validator/lib/isEmpty";
import isStrongPassword from "validator/lib/isStrongPassword";
import { name as appName } from "../../app.json";
import { getModel, getSystemVersion } from "react-native-device-info";
import { RefObject } from "react";

export const prettyPrint = (...data: any) => {
  const replacer = (key: any, value: any) => {
    if (typeof value === "undefined") {
      return "undefined";
    }
    if (value == null) {
      return "null";
    }
    return value;
  };
  console.log(
    JSON.stringify(data, replacer, 2)
      .replaceAll('"null"', "null")
      .replaceAll('"undefined"', "undefined")
  );
};

export const showDangerMessage = (
  message: string = "",
  options?: Omit<MessageOptions, "message">,
  ref?: RefObject<FlashMessage>
) => {
  if (ref?.current) {
    ref.current?.showMessage({
      type: "danger",
      message: message ?? "",
      duration: 2000,
      ...options,
    });
    return;
  }
  showMessage({
    type: "danger",
    message: message ?? "",
    duration: 2000,
    ...options,
  });
};

export const showSuccessMessage = (
  message: string,
  options?: Omit<MessageOptions, "message">,
  ref?: RefObject<FlashMessage>
) => {
  if (ref?.current) {
    ref.current?.showMessage({
      type: "success",
      message: message ?? "",
      duration: 2000,
      ...options,
    });
    return;
  }
  showMessage({
    type: "success",
    message: message ?? "",
    duration: 2000,
    ...options,
  });
};

export const resetStacksOnTabClicks =
  ({ navigation }: any) =>
  (e: any) => {
    const state = navigation.getState();
    if (state) {
      const nonTargetTabs = state.routes.filter((r: any) => r.key !== e.target);
      nonTargetTabs.forEach((tab: any) => {
        if (tab?.state?.key) {
          navigation.dispatch({
            ...StackActions.popToTop(),
            target: tab?.state?.key,
          });
        }
      });
    }
  };

export const delay = (t: number, v: () => void) => {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t);
  });
};

export const validatePassword = (pwdStr: string, fieldName: string) => {
  let pwdError = "";

  // Must not be empty
  if (isEmpty(pwdStr)) {
    pwdError = `Please enter ${String(fieldName).toLowerCase()}.`;
  }
  // At least 8 characters
  // A mixture of both uppercase and lowercase letters
  // A mixture of letters and numbers
  // Inclusion of at least one special character
  else if (
    !isStrongPassword(pwdStr, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    pwdError = `${fieldName} must be 8 characters long with at least one number, one uppercase, one lowercase letter and one special character.`;
  }
  if (pwdError.length === 0) {
    return true;
  } else {
    showDangerMessage(pwdError);
    return false;
  }
};

export const makeQueryString = (obj: { [key: string]: any }): string => {
  let queryString = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      queryString +=
        encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]) + "&";
    }
  }
  return queryString.slice(0, -1);
};

export const makeBearerToken = (token: string) => {
  return `Bearer ${token}`;
};

export const onOpenGallery = async (): Promise<Asset[] | undefined> => {
  try {
    let selectedImage = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: false,
      quality: 0.9,
      selectionLimit: 10,
    });
    if (!selectedImage.didCancel && selectedImage?.assets?.length) {
      return selectedImage?.assets;
    }
    return undefined;
  } catch (error) {
    throw new Error(error?.toString());
  }
};

export const onOpenCamera = async (): Promise<Asset | undefined> => {
  try {
    let selectedImage = await launchCamera({
      mediaType: "photo",
      includeBase64: false,
      quality: 0.9,
    });
    if (!selectedImage.didCancel && selectedImage?.assets?.length) {
      return selectedImage?.assets[0];
    }
    return undefined;
  } catch (error) {
    throw new Error(error?.toString());
  } finally {
  }
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
};

export const isCloseToTop = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: NativeScrollEvent) => {
  return contentOffset.y == 0;
};

//

// export const isDateValid = (selectedYear: number, selectedMonth: number, selectedDay: number): boolean => {
//   // Validate the year (for example, ensuring it's within a valid range)
//   if (selectedYear < 1900 || selectedYear > moment().year()) {
//     return false;
//   }

//   // Validate the month (1-based index in Moment.js)
//   if (selectedMonth < 1 || selectedMonth > 12) {
//     return false;
//   }

//   // Create a Moment.js date object for the selected date
//   const selectedDateObj = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`, 'YYYY-MM-DD');

//   // Check if the date is valid using Moment.js isValid() method
//   if (!selectedDateObj.isValid()) {
//     return false;
//   }
//   if (selectedDateObj.isAfter(moment())) {
//     return false;
//   }
//   // The date is valid
//   return true;
// };

// export const isAbove16 = (selectedYear: number, selectedMonth: number, selectedDay: number) => {
//   const birthDate = moment(`${selectedYear}-${selectedMonth}-${selectedDay}`, 'YYYY-MM-DD');
//   const ageDifference = moment().diff(birthDate, 'year');
//   if (ageDifference < 16) {
//     return false;
//   } else {
//     return true;
//   }
// };

export const removeDuplicates = (arr: any, property: string) => {
  const uniqueMap = new Map();
  const filteredArray = [];

  for (const item of arr) {
    if (!uniqueMap.has(item[property])) {
      uniqueMap.set(item[property], true);
      filteredArray.push(item);
    }
  }

  return filteredArray;
};

export const isValidArray = <T>(arr?: T[]): boolean => {
  return typeof arr !== "undefined" && Array.isArray(arr);
};

export const isNotEmptyArray = <T>(arr?: T[]): boolean => {
  return typeof arr !== "undefined" && Array.isArray(arr) && arr.length > 0;
};

export const objectToFormData = (dataObject: Record<string, any>): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(dataObject)) {
    if (Array.isArray(value)) {
      value.forEach((item, index) => formData.append(`${key}[${index}]`, item));
    } else {
      formData.append(key, String(value));
    }
  }
  return formData;
};
// Converts kilobytes (KB) to bytes (B).
export function kbToBytes(kb: number): number {
  return kb * 1024;
}

export function kbToMb(kb: number): number {
  return kb / 1024;
}

export const cleanNumber = (str: string): string => {
  return str.replace(/[^0-9]/g, "");
};

export const getDetailForAPI = () => ({
  device_type: Platform.OS, // for the platform
  device_os_version: getSystemVersion(), // os version
  device_info: getModel(), // device modal
});
