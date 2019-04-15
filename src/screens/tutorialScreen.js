import React, { Component } from 'react';
import {StyleSheet, View, Text, FlatList, Image, ImageBackground} from 'react-native';

//Components
import TopSwipe	from '../components/topSwipe';
import FooterSwipe from '../components/footerSwipe';
import ListOng from '../components/listOng';
import FotoMatch from '../assets/fotoMatch.jpg';

class TutorialScreen extends Component {
  
	render() {
		return(
			<View  style={styles.container}>
				<TopSwipe />
				<FooterSwipe />
			</View>
		)
	}
} 
const styles = StyleSheet.create({
  container: {
  	flex:1
  },
});

export default TutorialScreen;