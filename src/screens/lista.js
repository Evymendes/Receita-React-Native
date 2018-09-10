import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ReceitaItem from './receitaItem';
import Receita from './receita';

class Lista extends Component {

	static navigationOptions = {
		title:'App de Receitas'
	};

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					key:123,
					nome:'Bolo de Chocolate',
					por: 'Vovó Palmira',
					imagem: 'https://guiadacozinha.com.br/wp-content/uploads/2018/03/bolo-pelado-sensa%C3%A7%C3%A3o-1.jpg',
					descricao: 'Muito fácil fazer e gostoso de mais',
					rendimento: 50,
					preparo: 60,
					ingredientes:[
						{key:1, txt:'4 ovos'},
						{key:2, txt:'4 colheres (sopa) de chocolate em pó'},
						{key:3, txt:'2 colheres (sopa) de manteiga'},
						{key:4, txt:'3 xícaras (chá) de farinha de trigo'},
						{key:5, txt:'2 xícaras (chá) de açúcar'},
						{key:6, txt:'2 colheres (sopa) de fermento'},
						{key:7, txt:'1 xícara (chá) de leite'}
					],
					modo:[
						{key:1, txt:'Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos'},
						{key:2, txt:'Adicione o fermento e misture com uma espátula delicadamente'},
						{key:3, txt:'Em uma forma untada, despeje a massa e asse em forno médio 180 ºC, preaquecido por cerca de 40 minutos'}
					]
				},
				{
					key:234,
					nome:'Bolo de Coco',
					por: 'Julia',
					imagem:'https://img.itdg.com.br/tdg/images/recipes/000/136/372/63717/63717_original.jpg?mode=crop&width=600&height=450',
					descricao: 'Muito fácil fazer e gostoso de mais',
					rendimento: 50,
					preparo: 60,
					ingredientes:[
							{key:1, txt:'4 ovos (claras e gemas separadas)'},
							{key:2, txt:'2 xícaras (chá) de açúcar'},
							{key:3, txt:'1/2 xicara(chá) de manteiga'},
							{key:4, txt:'2 xícaras (chá) de farinha de trigo'},
							{key:5, txt:'1 xícara (chá )de maisena'},
							{key:6, txt:'1 vidro de leie de coco (200 ml)'},
							{key:7, txt:'1 pacote de coco ralado orgânico FINOCOCO'},
							{key:8, txt:'1 colher (sopa) de fermento em pó'},
							{key:9, txt:'Margarina e farinha de trigo para untar'},
					],
					modo:[
						{key:1, txt:'Na batedeira bata as claras em neve e reserve.'},
						{key:2, txt:'Ainda na batedeira,bata as gemas com o açucar e a manteiga até obter um creme claro.'},
						{key:3, txt:'Acrescente a farinha, a maisena e o leite de coco;'},
						{key:4, txt:'Bata mais um pouco e acrescente metade do coco ralado;Desligue a batedeira e misture com as claras em neve os fermentos'},
						{key:5, txt:'Despeje em uma fôrma de 35X25 cm untada e enfarinhada e leve ao forno médio, preaquecido, por 40 minutos'},
						{key:6, txt:'Retire o bolo do forno e deixe esfriar.Corte-o ao meio e coloque o recheio com o brigadeiro e decore com coco em lascas,como tinha morangos coloquei,ficou visualmente lindo.'}
					]

				}
		]
	};
	this.clicou = this.clicou.bind(this);
}

	clicou(item) {
		this.props.navigation.navigate('Receita', item);
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList 
					data={this.state.list}
					renderItem={({item})=> <ReceitaItem data={item} onPress={()=>{this.clicou(item); }} /> }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	}
});

export default Lista;