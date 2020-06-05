import React, { Component } from 'react';
import { Text, ActivityIndicator, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
const page1 = 'https://reqres.in/api/users'
const page2 = 'https://reqres.in/api/users?page=2'
const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingLeft: 20,
        
    },
    item: {
        flex: 1,
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF'
    },
   
    
})
class list extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource:null,
        
        }
    }
   
    componentDidMount() {
        return fetch(page1)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data,
                });
            })

            .catch((error) => {
                console.log(error);

            });




    }
    state = {}
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        }
        else {
            let record = this.state.dataSource.map((val, key) => {
                return <View key={key} styles={styles.item}>
                    <Text>
                        {val.id}{"\n"}
                        {val.first_name}{"\n"}
                        {val.last_name}{"\n"}
                        {val.email}{"\n"}
                    </Text>
                </View>
            })

            return (
                <ScrollView>
                    <View style={styles.container}>

                       
                        {record}

                    </View>
                </ScrollView>
            );
        }
    }
}

export default list;