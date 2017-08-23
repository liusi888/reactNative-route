/**
 * Created by admin on 2017/8/20.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
export default class MainVC extends Component {
    static navigationOptions = {
        title: '首页'//对页面的配置
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{height:60,backgroundColor:'orange',justifyContent: 'center',}}
                    onPress={() => navigate('DetailVC', { title: '详情',des:'我是返回点击我' })} >
                    <Text>点击进详情页</Text>
                </TouchableOpacity>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

