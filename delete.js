import React, { Component } from 'react';
const page1 = 'https://reqres.in/api/users/'
import { StyleSheet, Dimensions, View, TextInput, TouchableOpacity, Text } from 'react-native'
const WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
    input: {
        marginTop: 5,
        margin: 'auto',
        width: WIDTH - 55,
        height: 50,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 10,
        marginHorizontal: 25,
        backgroundColor: 'rgba(255,255,255,07)',
        color: 'rgba(0,0,0,0.5)'
    },
    inputContainer: {
        paddingTop: 20,
    },
    btnLogin: {
        alignSelf: 'center',
        width: WIDTH - 35,
        marginTop: 5,
        margin: 'auto',
        backgroundColor: '#3d9e82',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        fontSize: 14,
        textAlign: 'center'
    },
    text: {

        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    }
}) 

class delete_item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            error_id: "",
        }  
    }
    componentDidMount() {
       



    }
    delete_request=()=>{
        this.setState({
            error_id: "",           
        })
        if(this.id_validation()){
            return fetch(page1+this.state.id, {
                method: 'DELETE'
            })
                .then(response => {
                    const statusCode = response.status;
                    alert("Response Code: " + statusCode)
                })




                .catch((error) => {
                    console.log(error)

                })

        }
    }
    id_validation = () => {
        const { id } = this.state
        if (id == "") {
            this.setState({
                error_id: "Please Enter ID"
            })
            return false
        }
        else if (!(id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6")) {
            this.setState({
                error_id: "Please Enter a valid ID between 1 and 6."
            })
            return false
        }
        return true
       
    }
    state = {}
    render() {
        
        return (
            <View style={styles.inputContainer} >
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ id: value })}
                    placeholder={'Enter ID'}
                    keyboardType={'numeric'}
                    maxLength={1}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    underlineColorAndroid='transparent'
                />
                <Text style={styles.error}>{this.state.error_id}</Text>
                <TouchableOpacity onPress={() => this.delete_request()} style={styles.btnLogin}>
                    <Text style={styles.text}
                    >Delete Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default delete_item;