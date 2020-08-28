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
}