import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ReceitaItem extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text> oiii </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container:{
		height:20,
		borderBottomWidth:1,
		borderColor:'#cccccc'
	},
	imagem:{
		width:100,
		height:70,
		marginTop:5
	}
});

export default ReceitaItem;