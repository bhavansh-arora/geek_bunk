import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';



const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    btnLogin: {
        alignSelf: 'center',
        width: WIDTH - 35,
        marginTop: 20,
        margin: 'auto',
        backgroundColor: '#3d9e82',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    }
});
class home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Pagination")} style={styles.btnLogin}>
                    <Text style={styles.text}
                    >Pagination</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("API Requests")} style={styles.btnLogin}>
                    <Text style={styles.text}
                    >API Requests</Text>
                </TouchableOpacity>


            </React.Fragment>
        );
    }
}

export default home;