import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
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
  ReadScreen: {screen:ReadScreen},
  WriteScreen: {screen:WriteScreen}
},

{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteScreen"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadScreen"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})

const TabContainer = createAppContainer(TabNavigation);
