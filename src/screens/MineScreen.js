import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Button, View, AsyncStorage } from 'react-native';

export default class MineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "个人中心",
      bodyText: ''
    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
        </Text>
        <Button
          title="退出登录"
          onPress={() => this._signOutAsync()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: '',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('MineScreen', () => MineScreen);
