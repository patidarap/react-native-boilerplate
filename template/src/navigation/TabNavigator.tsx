import {StackScreenRouteProp, TabScreenRouteProp} from '@apptypes';

import {H, W, colors, commonStyles} from '@theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackScreenProps} from '@react-navigation/stack';
import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Home} from '@screens';
const Tabs = createBottomTabNavigator<TabScreenRouteProp>();

const TabNavigation: FC<
  StackScreenProps<StackScreenRouteProp, 'TabNavigation'>
> = ({navigation, route}) => {
  const [showLogout, setShowLogout] = useState<boolean>(false);

  const renderTabItem = (
    focused: boolean,
    TabFocusedImage: any,
    TabUnFocusedImage: any,
  ) => {
    return focused ? (
      <View style={styles.iconSelected}>
        <TabFocusedImage />
      </View>
    ) : (
      <TabUnFocusedImage />
    );
  };

  return (
    <View style={commonStyles.mainView}>
      <Tabs.Navigator
        screenOptions={{
          tabBarItemStyle: {paddingVertical: H(13)},
          headerShadowVisible: false,
          headerShown: false,
        }}>
        <Tabs.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarLabel: () => false,
            // tabBarIcon: ({focused}) =>
            //   renderTabItem(focused, IC_Project_Focused, IC_Project_UnFocused),
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconSelected: {
    borderWidth: W(1.5),
    borderColor: colors.black,
    borderRadius: W(30),
    padding: 1.5,
  },
});
