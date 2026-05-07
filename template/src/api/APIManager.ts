import store, {dispatch, toggleLoader, userReset} from '@appredux';
import {
  ACCESS_TOKEN,
  ASYNC_USER,
  BASE_URL,
  IS_PRODUCTION,
  PRODUCTION_BASE_URL,
  showDangerMessage,
} from '@common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const baseUrl: string | undefined = IS_PRODUCTION
  ? PRODUCTION_BASE_URL
  : BASE_URL;
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// to intercept the request with bearer
axiosInstance.interceptors.request.use(
  async config => {
    try {
      const accessToken = store.getState().profile.userData.token;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {}
    return config;
  },
  error => {
    // Handle request errors (e.g., network issues).
    return Promise.reject(error);
  },
);

// to intercept the response if response have auth issue than forcefully logout the user
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        showDangerMessage('Something went wrong! please login again'); // this message need to be changed as per the client requirement
        AsyncStorage.multiRemove([ASYNC_USER, ACCESS_TOKEN]);
        dispatch(userReset());
        dispatch(toggleLoader(false));
      }
      if (error.response?.status === 500) {
        showDangerMessage(
          '500 Internal Server Error on ' + error.response?.config.url,
        );
        dispatch(toggleLoader(false));
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
