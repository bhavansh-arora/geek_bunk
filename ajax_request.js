import React, { Component } from 'react';
import {Text,ActivityIndicator, View,StyleSheet,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
const WIDTH = Dimensions.get('window').width
const page1 ='https://reqres.in/api/users'
const page2 ='https://reqres.in/api/users?page=2'
const styles=StyleSheet.create({
   
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
})
class ajax_request extends Component {
   
    
    state = {  }
    render() { 
         
          
         return (
            
           <View style={styles.container}>
           
                 <TouchableOpacity onPress={() => this.props.navigation.navigate("Edit Item")} style={styles.btnLogin}>
                     <Text style={styles.text}
                     >Edit Item</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate("Delete")} style={styles.btnLogin}>
                     <Text style={styles.text}
                     >Delete Item</Text>
                 </TouchableOpacity>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate("List")} style={styles.btnLogin}>
                         <Text style={styles.text}
                         >List Items</Text>
                     </TouchableOpacity>
               
                 
           </View>
          
          );
        
    }
}
 
export default ajax_request;