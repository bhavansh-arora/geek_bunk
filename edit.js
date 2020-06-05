import React, { Component } from 'react';
import {StyleSheet,Dimensions,View,TextInput,TouchableOpacity,Text} from 'react-native'
const page1 = 'https://reqres.in/api/users/'
const page2=  'https://jsonplaceholder.typicode.com/todos/5'
const WIDTH = Dimensions.get('window').width
const styles=StyleSheet.create({
        input:{
        marginTop: 5,
        margin: 'auto',
        width:WIDTH-55,
        height:50,
        borderRadius:25,
        fontSize:16,
        paddingLeft:20,
        paddingTop:10,
        marginHorizontal:25,
        backgroundColor:'rgba(255,255,255,07)',
        color:'rgba(0,0,0,0.5)'
    },
    inputContainer:{
        paddingTop:20,
    },
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
    error:{
color:'red',
fontSize:14,
textAlign:'center'
    },
    text: {

        color: '#FFF',
        textAlign: 'center',
        fontSize: 16
    }
})
class edit extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            first_name:"",
            last_name:"",
            email:"",
            error_id:"",
            error_first_name:"",
            error_last_name:"",
            error_email:""
        }
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            this.setState({
                error_email: "Please Enter a valid E-mail address."
            })
            return false;
        }
        else {
            console.log("Email is Correct");
            this.make_api_call()
            return true;
        }
    }
   make_api_call=()=>{
       fetch(page1+this.state.id,{
           method:'PUT',
           headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'

           },
           body: JSON.stringify({
               id:this.state.id,
               email:this.state.email,
               first_name:this.state.first_name,
               last_name:this.state.last_name
           }),
           
           
          
           

       })
           .then(response => {
               const statusCode = response.status;
               alert("Response Code: " + statusCode)
           })




           .catch((error) => {
               console.log(error)

           })
   }
    validate_field=()=>{
        const {id,first_name,last_name,email}=this.state
        this.setState({
            error_first_name: "",
            error_email:"",
            error_id:"",
            error_last_name:""
        })
        if(id==""){
            this.setState({
                error_id:"Please Enter ID"
            })
            return false
        }
        else if (!(id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6")) {
            this.setState({
                error_id: "Please Enter a valid ID between 1 and 6."
            })
            return false
        }
        if(first_name==""){
            this.setState({
                error_first_name: "Please Enter First Name."
            })
            return false
        }
        if(last_name==""){
            this.setState({
                error_last_name: "Please Enter Last Name."
            })
            return false
        }
        if(email==""){
            this.setState({
                error_email: "Please Enter E-mail address."
            })
            return false
        }
        
        return true
    }
    ui_validation = () => {
        if (this.validate_field()) {
this.validate(this.state.email)
        }
    }
    state = {  }
    render() { 
        return (
            <View style={styles.inputContainer} >
                <TextInput style={styles.input} 
                onChangeText={(value)=>this.setState({id:value})}
                placeholder={'Enter ID'}
                keyboardType={'numeric'}
                maxLength={1}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                underlineColorAndroid='transparent'
                />
                <Text style={styles.error}>{this.state.error_id}</Text>
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ first_name: value })}
                    placeholder={'Enter First Name'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    underlineColorAndroid='transparent'
                />
                <Text style={styles.error}>{this.state.error_first_name}</Text>
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ last_name: value })}

                    placeholder={'Enter Last Name'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    underlineColorAndroid='transparent'
                />
                <Text style={styles.error}>{this.state.error_last_name}</Text>
                <TextInput style={styles.input}
                    onChangeText={(value) => this.setState({ email: value })}

                    placeholder={'Enter E-mail'}
                    placeholderTextColor={'rgba(0,0,0,0.5)'}
                    underlineColorAndroid='transparent'
                />
                <Text style={styles.error}>{this.state.error_email}</Text>
                <TouchableOpacity onPress={()=>this.ui_validation()} style={styles.btnLogin}>
                    <Text style={styles.text}
                    >Edit Item</Text>
                </TouchableOpacity>

                
            </View>
          );
    }
}
 
export default edit;