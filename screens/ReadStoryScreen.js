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

const DATA = [
  {
    id: '1',
    title: 'Harry Potter',
  },
  {
    id: '2',
    title: 'Hardy Boys',
  },
  {
    id: '3',
    title: 'Nancy Drew',
  },
];

export default class ReadStoryScreen extends React.Component{
  constructor(){
    
    super()
    this.state = {
      results:DATA
    }
  }

  SearchFilterFunction  = (search) => {
    var search_data;
    this.setState({
      search:search,
    });
  }
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
        
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})