import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class ReadStoryScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>You can read what you have wrote</Text>
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