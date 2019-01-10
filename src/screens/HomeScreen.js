import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  RefreshControl, BackHandler, Platform, ToastAndroid
} from 'react-native';
import Swiper from 'react-native-swiper'
import Header from '../components/Header'
const { width } = Dimensions.get('window')
const data = new Array(16).fill('活动');

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

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
    if (this.props.navigation.isFocused()) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false});
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          hideLeft={true}
          bg={{backgroundColor: '#9DD6EB'}}
          color={{color: 'white'}}
        />
        <View style={{height: 200}}>
          <Swiper style={styles.wrapper} height={200} autoplay>
            <View style={styles.slide1}>
              <Text style={styles.text}>Wellcome To My Shop</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Buy!</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>Buy! Buy! Buy!</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.block_kind}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.block_kind_list}>
              <Text style={styles.kind_item}>冬季特卖</Text>
            </View>
            <View style={styles.block_kind_list}>
              <Text style={styles.kind_item}>最新上架</Text>
            </View>
            <View style={styles.block_kind_list}>
              <Text style={styles.kind_item}>人气最高</Text>
            </View>
            <View style={styles.block_kind_list}>
              <Text style={styles.kind_item}>清仓甩卖</Text>
            </View>
          </ScrollView>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          showsVerticalScrollIndicator={false}>
          <View style={styles.grand}>
            {
              data.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.grand_list} onPress={() => this.props.navigation.navigate('Activity', { Id: `活动详情_${index}` })}>
                    <View>
                      <Text style={styles.grand_text}>{item}{index}</Text>
                    </View>
                  </TouchableOpacity>
                )
            })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    height: 250
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  block_kind: {
    width,
    marginTop: 10,
    marginBottom: 10,
    height: 60
  },
  block_kind_list: {
    width: 150,
    height: 60,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: '#f40'
  },
  kind_item: {
    textAlign:'center',
    lineHeight: 60,
    color: '#fff'
  },
  grand: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  grand_list: {
    width: '23%',
    height: 60,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f40'
  },
  grand_text: {
    lineHeight: 60,
    textAlign: 'center',
    color: '#fff'
  },
});
