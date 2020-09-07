import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import bottomTabNavigator from './components/bottomTabNavigator'
import WelcomeScreen from './screens/WelcomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
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

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: bottomTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

