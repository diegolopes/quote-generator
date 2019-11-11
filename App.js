import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Array com todas as citações
let quotes = [
  'Grandes coisas não se fazem por impulso, mas pela junção de uma série de pequenas coisas.\n - Van Gogh',
  'Aprendi que falar pode aliviar minhas dores emocionais. \n - Shakespeare',
  'Quem pensa pouco, erra muito. \n - Leonardo Da Vinci',
  'Toma para ti o conselho que dá aos outros.\n - Tales de Mileto',
  'Antes de fazer alguma coisa, pense. Quando achar que já pode faze-la, pense novamente.\n - Pitagoras',
  'Quando um homem é bom amigo, também tem amigos bons. \n  - Maquiavel',
  'Ou você controla seus atos, ou eles o controlarão \n - Shakespeare',
  'O caminho para se conseguir a felicidade é fazendo as outras pessoas felizes \n - Robert Baden-Powell',
  'É melhor ser rei do teu silêncio do que escravo das tuas palavras. \n - Shakespeare'

];

// Aqui vamos sortear uma citação aleatória
function generateQuote() {
  let randomItem = parseInt(Math.random() * 8); //Gera um número aleatório
  return quotes[randomItem] +
    '\n\n Citacão #' +
    randomItem;
}

// Aqui vamos renderizar a view e mostrar a citação
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textValue: 'Clique no botão para gerar a citação!'
    }
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.setState({
      textValue: generateQuote() + '\n'
    })
  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.quote}> {this.state.textValue} </Text>
        <Button title='Gerar citação' onPress={this.onPressButton} />
      </View>

    );
  }
}

// Estilos da view
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  quote:{
    fontSize: 16,
    textAlign: 'left'

  }
});
