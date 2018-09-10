import React, { Component } from 'react';
import { StyleSheet,TouchableHighlight, View, Text, TouchableOpacity, Image} from 'react-native';
import { TabNavigator } from 'react-navigation';

import ReceitaResumo from '../components/receitaResumo'
import ReceitaIngredientes from '../components/receitaIngredientes'
import ReceitaModo from '../components/receitaModo'

const Abas = TabNavigator({
	ReceitaResumo:{
		screen:ReceitaResumo
	},
	ReceitaIngredientes:{
		screen:ReceitaIngredientes
	},
	ReceitaModo:{
		screen:ReceitaModo
	}
}, {
	tabBarPosition:'top',
	animationEnable: true,
	tabBarOptions:{
		showIcon:false,
		style:{
			backgroundColor:'#EEEEEE'
		},
		labelStyle:{
			fontSize: 14,
			height: 30,
			lineHeight:47,
		},
		activeTintColor: '#333333',
		inactiveTintColor: '#CCCCCC'
	}
});

class Receita extends Component {
	
	static navigationOptions = {
		title:'Receita',
		header:null
	};

	constructor(props){
		super(props);
		this.state = {

		};

		this.goBack = this.goBack.bind(this);
	}

	goBack() {
		this.props.navigation.goBack();

	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight underlayColor='#CCCCCC' onPress={this.goBack} style={styles.bottomBack}>
						<Image source={require('../assets/back.png')} style={styles.backImagem} />
				</TouchableHighlight>
				<Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.receitaImage} />
				<Abas screenProps={this.props.navigation.state.params} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:20,
	},
	bottomBack:{
		width:26,
		height:26,
		marginLeft: 10,
		marginTop:5,
		zIndex:99
	},
	backImagem:{
		width:26,
		height:26
	},
	receitaImage:{
		height:150,
		marginTop: -51
	}
});

export default Receita;