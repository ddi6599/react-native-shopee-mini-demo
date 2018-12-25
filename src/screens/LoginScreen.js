import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Button,
  Text,
  // TextInput,
  KeyboardAvoidingView,
  BackHandler,
  Vibration,
  Platform,
  ToastAndroid,
  View,
  AsyncStorage,
  StatusBar
} from 'react-native';
import { Label, Form, Item, Input, Button } from 'native-base';

export default class LoginScreen extends Component {
  state = {
    behavior: 'padding',
    cname: 'SHOPEE',
    userName: 'test01',
    password: 'a123456'
  };

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    let time = new Date();
    this.lastBackPressed = this.thisBackPressed;
    this.thisBackPressed = time.getTime();

    if (this.lastBackPressed && this.lastBackPressed + 2000 >= this.thisBackPressed) {
      //最近2秒内按过back键，可以退出应用。
      BackHandler.exitApp();
      return false;
    }
    Vibration.vibrate()
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'test01');
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
        />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View><Text style={styles.cName}>{this.state.cname}</Text></View>
          <Form>
            <Item stackedLabel last>
              <Label>Username</Label>
              <Input
                value={this.state.userName}
                onChangeText={(userName) => this.setState({userName})}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({password})}
              />
            </Item>
          </Form>
          <View style={styles.loginBtn}>
            <Button
              block
              bordered
              onPress={() => this._signInAsync()}>
            <Text>Sign in</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  cName: {
    textAlign: 'center',
    paddingBottom: 40,
    marginTop: 100
  },
  loginBtn: {
    marginTop: 20
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 30
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
