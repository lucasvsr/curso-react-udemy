import React from 'react';

class App extends React.Component {

  state = {

    nome: this.props.nome

  }

  modificarNome = (event) => { // No react só pode existir uma função, as demais tem que ser arrow functions ou criar um construtor fazendo o bind (Aula 12) || ARROW FUNCTIONS SAO MAIS PRODUTIVAS

    let nome = event.target.value; //target = o componente, neste caso vai ser o input || value = o valor que o componente está guardando, no caso o que o usuário digitou.

    this.setState({ // Não é possível alterar diretamente a variavel state, tem que ser por este método.

      nome

    })

  }

  criarComboBox = () => {

    const opcoes = ['Igor Ribeiro', 'Lucas Ribeiro']
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (

      <select>
        {comboBoxOpcoes}
      </select>

    )

  }

  componentDidMount() {

    console.log('Executou o componentDidMount');
    

  }
  render(){

    console.log('Executou o render');

    const MeuComboBox = () => this.criarComboBox() //Permite criar uma tag personalizada - SEMPRE USAR A PRIMEIRA LETRA MAIUSCULA

    return(

      <>

        <input type = "text" value = {this.state.nome} onChange = { this.modificarNome } />
        <h1>Hello {this.state.nome}</h1>
        <MeuComboBox />

      </>

    )

  }

}

export default App;
