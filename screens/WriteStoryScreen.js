import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';

import { Header } from 'react-native-elements';
import database from '../config'
export default class WriteStoryScreen extends React.Component{
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:'',
    }
  }

  updateAuthor = () =>{
    database.ref('/').update({
      Author:this.state.author,
      Title:this.state.title,
      Story:this.state.story
    })
  }

  render(){
    return(
      <KeyboardAvoidingView  style = {styles.container} behavior='padding' enabled>
      
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
        onChangeText={(text)=>{
          this.setState({
            title:text
          })
        }}
        ></TextInput>

        <TextInput
        style={styles.inputBox}
        placeholder="Author"
        onChangeText={(text)=>{
          this.setState({
            author:text
          })
        }}
        ></TextInput>
        

        <TextInput
        style={styles.multipleInputBox}
        placeholder="Your Story"
        multiline
        numberOfLines={4}
        onChangeText={(text)=>{
          this.setState({
            story:text
          })
        }}
        ></TextInput>

        <TouchableOpacity style={styles.button}
        onPress={[this.updateAuthor,ToastAndroid.show("story sent",ToastAndroid.SHORT)]} >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>

        <Text>{this.state.author}</Text>
      </KeyboardAvoidingView>
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