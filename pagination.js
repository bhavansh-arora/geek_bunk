import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
const dataList = [{ key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }]
const numColumns = 2
const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        margin: 5
    },
    itemStyle: {
        backgroundColor: '#3d9e82',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1,
        height: WIDTH / 2
    },
    itemText: {
        color: '#fff',
        fontSize: 20
    },
});
export default class pagination extends Component {
    _renderItem = ({ item, index }) => {
        let { itemStyle, itemText } = styles
        return (
            <View style={itemStyle}>
                <Text style={itemText}>
                    {item.key}
                </Text>
            </View>
        )
    }
    render() {
        let { container, itemText } = styles

        return (
            <View style={container}>
                <FlatList
                    data={dataList}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />

            </View>);
    }
}

