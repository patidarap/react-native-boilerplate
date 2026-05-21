import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  LogIn: undefined;
};

export type AppStackParamList = {
  // https://reactnavigation.org/docs/typescript#nesting-navigators
  TabNavigation?: NavigatorScreenParams<TabScreenRouteProp>;
  ModalScreen: undefined;
};

export type TabScreenRouteProp = {
  Home: undefined;
  Profile: undefined;
};

// Auth stack screen props — for screens inside AuthStack (e.g. LogIn)
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

// App stack screen props — for screens inside AppStack (e.g. ModalScreen)
export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

// Tab screen props — for screens inside TabNavigator
export type TabNavigationScreenProps<T extends keyof TabScreenRouteProp> =
  BottomTabScreenProps<TabScreenRouteProp, T>;

// Composite props — for tab screens that also need to navigate to AppStack screens
export type TabNavigationWithAppStackScreenProps<
  T extends keyof TabScreenRouteProp,
> = CompositeScreenProps<
  BottomTabScreenProps<TabScreenRouteProp, T>,
  NativeStackScreenProps<AppStackParamList, keyof AppStackParamList>
>;

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
