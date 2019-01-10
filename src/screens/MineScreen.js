import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, AsyncStorage, ScrollView } from 'react-native';
import { Platform } from "react-native";
import {
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Separator
} from "native-base";
import Header from '../components/Header'
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});

export default class MineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header
          hideLeft={true}
          title={'个人中心'}
          bg={{backgroundColor: '#f40'}}
          color={{color: 'white'}}
        />
        <ScrollView>
          <Separator bordered noTopBorder />
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FD3C2D" }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
            <Text>消息订阅</Text>
            </Body>
            <Right>
              <Switch value={false} trackColor="#50B948" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
            <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon active name="phone-portrait" />
              </Button>
            </Left>
            <Body>
            <Text>Mobile Data</Text>
            </Body>
            <Right>
              <Radio selected />
            </Right>
          </ListItem>

          <Separator bordered />

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FD3C2D" }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
            <Text>Notifications</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#8F8E93" }}>
                <Icon active name="switch" />
              </Button>
            </Left>
            <Body>
            <Text>Control Center</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
          <ListItem icon last>
            <Left>
              <Button style={{ backgroundColor: "#5855D6" }}>
                <Icon active name="moon" />
              </Button>
            </Left>
            <Body>
            <Text>Do Not Disturb</Text>
            </Body>
            <Right>
              <Text>Yes</Text>
            </Right>
          </ListItem>

          <Separator bordered />

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#4CDA64" }}>
                <Icon name="arrow-dropdown" />
              </Button>
            </Left>
            <Body>
            <Text>通讯录</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#8F8E93" }}>
                <Icon active name="cog" />
              </Button>
            </Left>
            <Body>
            <Text>版本更新</Text>
            </Body>
            <Right>
              <Badge style={{ backgroundColor: "#FD3C2D" }}>
                <Text>2</Text>
              </Badge>
            </Right>
          </ListItem>
          <ListItem last icon onPress={() => this._signOutAsync()}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="hand" />
              </Button>
            </Left>
            <Body>
            <Text>退出登录</Text>
            </Body>
            <Right>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
}
