import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';

import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Header
          backgroundColor={'#FFC0CB'}
          centerComponent={{
            text: 'Write Your Own Story',
            style: { color: '#000000', fontSize: 18 },
          }}
        />

        <TextInput
        style={styles.inputBox}
        placeholder="Title"
        ></TextInput>

        <TextInput
        style={styles.inputBox}
        placeholder="Author"
        ></TextInput>
        

        <TextInput
        style={styles.multipleInputBox}
        placeholder="Your Story"
        multiline
        numberOfLines={4}
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: '95%',
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    marginLeft:10,
    marginTop:20
  },
  multipleInputBox: {
    width: '95%',
    height: 250,
    borderWidth: 1.5,
    fontSize: 20,
    marginLeft:10,
    marginTop:20
  },
  container: {
    flex: 1,
  },

  button:{
    marginTop:20,
    marginLeft:100,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:50,
    borderWidth:3,
    borderRadius:'20px',
    backgroundColor:'#FFC0CB'
  },

  buttonText:{
    justifyContent:'center',
    alignItems:'center',
    fontStyle:'bold',
    fontSize:18,
  }

})