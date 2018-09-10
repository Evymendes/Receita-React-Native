import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

class ReceitaItem extends Component {

	constructor(props){
		super(props);
		this.state = {};
	}
	
	render() {
		return (
			<TouchableHighlight onPress={this.props.onPress} underlayColor='#CCC'>
			<View  style={styles.container}>
				<Image source={{uri:this.props.data.imagem}} style={styles.imagem} />
				<View style={styles.text}>
					<Text style={styles.nome}>{this.props.data.nome}</Text>
					<Text style={styles.info}> {this.props.data.rendimento} porçõs - {this.props.data.preparo} minutos </Text>
				</View>
			</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create ({
	container:{
		flex:1,
		flexDirection:'row',
		height:80,
		borderBottomWidth:1,
		borderColor:'#cccccc'
	},
	imagem:{
		resizeMode: 'contain',
		width:100,
		height:70,
		marginTop:5
	},
	text:{
		flex:1,
		marginLeft:10,
		flexDirection:'column',
		justifyContent:'center'
	},
	nome:{
		fontSize:14,
		fontWeight:'bold'
	},
	info:{
		color:'#999999'
	}
});

export default ReceitaItem;