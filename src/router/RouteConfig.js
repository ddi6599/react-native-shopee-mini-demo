import { createStackNavigator } from 'react-navigation'
import BottomTabNavigator from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";
import ActivityDetailScreen2 from "../screens/ActivityDetailScreen2";

export const SignInStack = createStackNavigator({
  Auth: { screen: LoginScreen }
}, {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    header: null,
    headerStyle: {
      elevation: 0, // 去阴影
    },
    gesturesEnabled: false
  }
});
export const AppStack = createStackNavigator({
  MainTab: { screen: BottomTabNavigator },
  Activity: { screen: ActivityDetailScreen },
  Activity2: { screen: ActivityDetailScreen2 }
}, {
  initialRouteName: 'MainTab',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    header: null,
    headerStyle: {
      elevation: 0, // 去阴影
    },
    gesturesEnabled: false
  }
})
