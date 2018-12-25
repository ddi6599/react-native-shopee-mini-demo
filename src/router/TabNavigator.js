import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import NearByScreen from "../screens/NearByScreen";
import MineScreen from "../screens/MineScreen";

export default BottomTabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页'
      }
    },
    NearBy: {
      screen: NearByScreen,
      navigationOptions: {
        tabBarLabel: '发现'
      }
    },
    Settings: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: '个人中心'
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-airplane`;
        } else if (routeName === 'Settings') {
          iconName = `ios-bicycle`;
        } else if (routeName === 'NearBy') {
          iconName = `ios-bonfire`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  })

