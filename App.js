import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';

import Receita from './src/screens/receita'
import Lista from './src/screens/lista'

const Navigator = createStackNavigator ({
  Lista:{
    screen: Lista
  },
  Receita:{
  	screen: Receita
  }
});

export default Navigator;



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
