import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Container, Button, Segment, Content, Text } from 'native-base';
import HeaderScreen from '../components/header'

export default class NearByScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {key: 0, name: '综合'},
        {key: 1, name: '销量'},
        {key: 2, name: '人气'}
      ],
      activeId: 0
    };
  }

  clickFun = (index) => {
    this.setState({
      activeId: index
    })
  }

  render() {
    let { tabs, activeId } = this.state
    return (
      <Container>
        <HeaderScreen options={{
          hideLeft: true,
          title: 'SHOPEE',
          bg: {backgroundColor: '#f40'},
          color: {color: 'white'}
        }} />
        <Segment style={{backgroundColor: '#f40'}}>
          {
            tabs.map((item, idx) => {
              return (
                idx === 0 ? <Button first key={idx} onPress={() => this.clickFun(item.key)} active={activeId === item.key ? true : false}>
                  <Text>{item.name}</Text>
                </Button> : idx === (tabs.length - 1) ? <Button last key={idx} onPress={() => this.clickFun(item.key)}  active={activeId === item.key ? true : false}>
                  <Text>{item.name}</Text>
                </Button> : <Button key={idx} onPress={() => this.clickFun(item.key)}  active={activeId === item.key ? true : false}>
                  <Text>{item.name}</Text>
                </Button>)
            })
          }
        </Segment>
        <Content padder>
          {
            activeId === 0 && <View>
              <Text>综合</Text>
            </View>
          }
          {
            activeId === 1 && <View>
              <Text>销量</Text>
            </View>
          }
          {
            activeId === 2 && <View>
              <Text>人气</Text>
            </View>
          }
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('NearByScreen', () => NearByScreen)
