import AsyncStorage from '@react-native-async-storage/async-storage';
// import EncryptedStorage from 'react-native-encrypted-storage';

//this file is created for the all the async services

export const setAsyncData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getAsyncData = async (key: string) => {
  let data = null;
  try {
    const res: any = await AsyncStorage.getItem(key);
    data = JSON.parse(res);
  } catch (e) {}
  return data;
};

export const removeAsyncData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

// export const setEncryptedStorage = async (key: string, value: any) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await EncryptedStorage.setItem(key, jsonValue);
//   } catch (e) {
//     throw e;
//   }
// };

// export const getEncryptedStorage = async (key: string) => {
//   let data = null;
//   try {
//     const res: any = await EncryptedStorage.getItem(key);
//     data = JSON.parse(res);
//   } catch (e) {
//     throw e;
//   }
//   return data;
// };

// export const removeEncryptedData = async (key: string) => {
//   try {
//     await EncryptedStorage.removeItem(key);
//   } catch (e) {
//     // remove error
//   }
// };
