import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Text,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home'
import edit from './edit'
import list from './list'
import delete_item from './delete'
import ajax_request from './ajax_request'
import pagination from './pagination'
const Stack=createStackNavigator();

class App extends Component {
  state = {  }
  render() { 
   
    return (
      
      
        <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name='Home' component={home} options={{
            headerStyle:{
              backgroundColor:'#3d9e82'
             
            },
            headerTintColor: '#FFF'
          }} />
          <Stack.Screen name='Edit Item' component={edit} options={{
            headerStyle: {
              backgroundColor: '#3d9e82'

            },
            headerTintColor: '#FFF'
          }} />
          <Stack.Screen name='Pagination' component={pagination} options={{
            headerStyle: {
              backgroundColor: '#3d9e82'

            },
            headerTintColor: '#FFF'
          }}/>
          <Stack.Screen name='API Requests' component={ajax_request} options={{
            headerStyle: {
              backgroundColor: '#3d9e82'

            },
            headerTintColor: '#FFF'
          }} />
          <Stack.Screen name='List' component={list} options={{
            headerStyle: {
              backgroundColor: '#3d9e82'

            },
            headerTintColor: '#FFF'
          }} />
          <Stack.Screen name='Delete' component={delete_item} options={{
            headerStyle: {
              backgroundColor: '#3d9e82'

            },
            headerTintColor: '#FFF'
          }} />
        </Stack.Navigator>
        </NavigationContainer>
      
     
      );
  }
}
 
export default App;


