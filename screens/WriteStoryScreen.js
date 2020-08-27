import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Header } from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>You can write your own story</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop:250
  },

  text: {
    justifyContent:'center',
    alignItems:'center',
    fontSize:20
  }

})