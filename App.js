import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <TabContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});

const TabNavigation = createBottomTabNavigator({
  ReadStoryScreen: {screen:ReadStoryScreen},
  WriteStoryScreen: {screen:WriteStoryScreen}
})

const TabContainer= createAppContainer(TabNavigation)