import React, { Component } from 'react';
import { AppRegistry, View, Image, ScrollView, RefreshControl } from 'react-native';
import { Container, Button, Segment, Text, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import Header from '../components/Header'

export default class NearByScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {key: 0, name: '综合'},
        {key: 1, name: '销量'},
        {key: 2, name: '人气'}
      ],
      activeId: 0,
      refreshing: false,
      list: [
        {
          name: 'NativeBase',
          gree: 'GeekyAnts',
          like: 230,
          comment: 23,
          head: require("../../assets/img/icon/default_head.jpg"),
          url: require("../../assets/img/banner/1.jpg"),
          time: '11h ago'
        },
        {
          name: 'NativeBase',
          gree: 'GeekyAnts',
          like: 230,
          comment: 23,
          head: require("../../assets/img/icon/default_head.jpg"),
          url: require("../../assets/img/banner/2.jpg"),
          time: '11h ago'
        },
        {
          name: 'NativeBase',
          gree: 'GeekyAnts',
          like: 230,
          comment: 23,
          head: require("../../assets/img/icon/default_head.jpg"),
          url: require("../../assets/img/banner/3.jpg"),
          time: '11h ago'
        },
        {
          name: 'NativeBase',
          gree: 'GeekyAnts',
          like: 230,
          comment: 23,
          head: require("../../assets/img/icon/default_head.jpg"),
          url: require("../../assets/img/banner/1.jpg"),
          time: '11h ago'
        }
      ]
    };
  }

  clickFun = (index) => {
    this.setState({
      activeId: index
    })
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1000);
  }

  render() {
    let { tabs, activeId, list } = this.state
    return (
      <Container>
        <Header
          hideLeft={true}
          title={'发现'}
          bg={{backgroundColor: '#f40'}}
          color={{color: 'white'}}
        />
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
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}>
          {
            activeId === 0 && <View>
              {
                list.map((item, index) => {
                  return (
                    <Card key={index}>
                      <CardItem>
                        <Left>
                          <Thumbnail source={item.head} />
                          <Body>
                          <Text>{item.name}</Text>
                          <Text note>{item.gree}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={item.url} style={{height: 150, width: null, flex: 1}}/>
                      </CardItem>
                      <CardItem>
                        <Left>
                          <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{item.like}</Text>
                          </Button>
                        </Left>
                        <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>{item.comment}</Text>
                        </Button>
                        </Body>
                        <Right>
                          <Text>{item.time}</Text>
                        </Right>
                      </CardItem>
                    </Card>
                  )
                })
              }
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
        </ScrollView>
      </Container>
    );
  }
}
