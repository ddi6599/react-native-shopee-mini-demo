import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";
import NearByScreen from "./screens/NearByScreen";
import MineScreen from "./screens/MineScreen";
import LoginScreen from "./screens/LoginScreen";
import ActivityDetailScreen from "./screens/ActivityDetailScreen";
import ActivityDetailScreen2 from "./screens/ActivityDetailScreen2";

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen }
},{
  headerMode: 'none',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  }
});

const SettingsStack = createStackNavigator({
  Mine: { screen: MineScreen }
},{
  initialRouteName: 'Mine', // 默认显示界面
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    title: '个人中心',
    headerStyle: {
      elevation: 0, // 去阴影
    },
    gesturesEnabled: false,
  }
});

const NearByStack = createStackNavigator({
  NearBy: { screen: NearByScreen }
},{
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    title: '发现',
    headerTitleStyle: {
      color: '#fff'
    },
    headerStyle: {
      backgroundColor: '#f40',
      elevation: 0 // 去阴影
    },
    gesturesEnabled: false,
  }
});

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页'
      }
    },
    NearBy: {
      screen: NearByStack,
      navigationOptions: {
        tabBarLabel: '发现'
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: '个人中心'
      }
    }
  },
  {
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

const RootStack = createStackNavigator({
  BottomTab: { screen: BottomTabNavigator },
  Login: { screen: LoginScreen },
  Activity: { screen: ActivityDetailScreen },
  Activitys: { screen: ActivityDetailScreen2 }
},{
  initialRouteName: 'BottomTab',
  defaultNavigationOptions: {
    header: null,
  }
});

export default createAppContainer(RootStack);
