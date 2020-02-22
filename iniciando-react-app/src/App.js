import React from 'react';

class App extends React.Component {

  state = {

    nome: 'Lucas Ribeiro'

  }
  render(){

    return(
      <h1>Hello {this.state.nome}</h1>
    )

  }

}

export default App;
