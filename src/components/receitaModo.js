import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class ReceitaModo extends Component {

	static navigationOptions = {
		tabBarLabel:'Preparo'
	};

	render() {
		return(
			<View style={styles.areaTab}>
					<FlatList 
					data={this.props.screenProps.modo}
					renderItem={({item}) => <Text style={styles.ingItem}>- Passo {item.key}: {item.txt}</Text>}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	areaTab:{
		flex:1,
		margin:10
	},
	nome:{
		fontSize:26,
		marginBottom:10
	},
	por:{
		marginBottom:10,
		color:'#FF0000'
	}
})

export default ReceitaModo;