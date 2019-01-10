import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { AppStack, SignInStack} from './RouteConfig'
import AuthLoadingScreen from "../components/AuthLoading";

const RouteConfig = {
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: SignInStack,
}
const StackNavigatorConfig = {
  initialRouteName: 'AuthLoading',
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    header: null,
    headerStyle: {
      elevation: 0, // 去阴影
    }
  }
}

const Navigator = createSwitchNavigator(RouteConfig, StackNavigatorConfig);

export default createAppContainer(Navigator);

