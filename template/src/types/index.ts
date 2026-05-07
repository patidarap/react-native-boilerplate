import {NavigatorScreenParams} from '@react-navigation/native';

export type StackScreenRouteProp = {
  LogIn: undefined;
  // here take a reference from
  // https://reactnavigation.org/docs/typescript#nesting-navigators
  TabNavigation?: NavigatorScreenParams<TabScreenRouteProp>;

  ModalScreen: undefined;
};

export type TabScreenRouteProp = {
  Home: undefined;
};

export type UserTypes = {
  _id: string;
  user_name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  user_type: number;
  created_at: string;
  __v: number;
  resetToken: string;
  device_info: string;
  device_os_version: string;
  device_type: string;
  token: string;
};

export type ResponseType<Data = any> = {
  data?: Data;
  status: number;
  message: string;
};
