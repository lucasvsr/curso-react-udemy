import React from 'react';

class App extends React.Component {

  state = {

    nome: ''

  }

  modificarNome = (event) => {

    let nome = event.target.value; //target = o componente, neste caso vai ser o input || value = o valor que o componente está guardando, no caso o que o usuário digitou.

    this.setState({ // Não é possível alterar diretamente a variavel state, tem que ser por este método.

      nome

    })

  }
  render(){

    return(

      <>

        <input type = "text" value = {this.state.nome} onChange = { this.modificarNome } />
        <h1>Hello {this.state.nome}</h1>

      </>

    )

  }

}

export default App;
