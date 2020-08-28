import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import {SearchBar} from 'react-native-elements';

import { Header } from 'react-native-elements';

import SearchResults from '../components/SearchResults'

import database from '../config'

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      search:'',
      allStories:['Harry Potter', 'Hardy Boys', 'Nancy Drew'],
      results:[]
    }
  }

  SearchFilterFunction  = (search) => {
    this.setState({
      search:search,
      results: []
    });
    var allStories = this.state.allStories;
    allStories.map((story)=>{
      if(story.startsWith(search)){
        if(search !=''){
          this.setState({
             results: this.state.results.push(story)
          })
        }
      }
    })
  };

  
    
 



  render(){
    return(
      <View style = {styles.container}>
       <Header
          backgroundColor={'#FFC0CB'}
          centerComponent={{
            text: 'Story Liabrary',
            style: { color: '#000000', fontSize: 18 },
          }}
        />
        <SearchBar
        placeholder="Search"
        onChangeText={this.SearchFilterFunction}
        value={this.state.search}
        />

        <SearchResults options={this.state.results}></SearchResults>
        <Text>{this.state.results}</Text>
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})