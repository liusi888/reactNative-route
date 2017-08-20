import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import DetailVC from './DetailVC';
import MainVC from './MainVC';

// StackNavigator配置，默认显示MianVC页面
const MyNav = StackNavigator(
    {
      MainVC: {screen: MainVC },
      DetailVC: {screen: DetailVC},
    },
    {
      initialRouteName: 'MainVC',//默认路由，就是第一个要显示的页面
    }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});



AppRegistry.registerComponent('MyNav', () => MyNav);
