import { StackScreenRouteProp } from "@apptypes";
import { ASYNC_USER, getAsyncData } from "@common";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { navigationRef } from "./RootNavigation";
import { LogIn, ModalScreen } from "@screens";
import TabNavigation from "./TabNavigator";
import { CustomLoader } from "@components";
import { RootState, dispatch, setUserData } from "@appredux";

const Stack = createStackNavigator<StackScreenRouteProp>();

const MainNavigation: FC = () => {
  const { isLogIn } = useSelector((state: RootState) => state.profile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await getAsyncData(ASYNC_USER);
    if (user) {
      dispatch(setUserData(user));
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {!isLoading && (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
          }}
        >
          {!isLogIn ? (
            <Stack.Group>
              <Stack.Screen name="LogIn" component={LogIn} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="TabNavigation" component={TabNavigation} />

              <Stack.Group
                screenOptions={{
                  headerShown: false,
                  presentation: "transparentModal",
                  gestureEnabled: true,
                  ...TransitionPresets.ModalSlideFromBottomIOS,
                }}
              >
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
              </Stack.Group>
            </Stack.Group>
          )}
        </Stack.Navigator>
      )}
      <CustomLoader isLocalLoading={isLoading} />
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
