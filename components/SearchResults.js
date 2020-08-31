import * as React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SearchResults extends React.Component{
  render(){
    return (
    <ul>
      <li>{this.props.results}</li>
    </ul>
  );
  }
}import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class SearchResults extends React.Component{
  renderItem = ({ item }) => (
      <Item title={item.title} />
  );
  render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={this.props.options}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffc0cb',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


