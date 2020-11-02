import { useState } from "react"
import React from 'react'

function useStateF() {

  const [ numero, setNumero ] = useState()
  const [ segundoNumero, setSegundoNumero ] = useState()
  const [ resultado, setResultado ] = useState()

  const [state, setState] = useState({

    numero: '',
    segundoNumero: '',
    resultado: ''

  })

  const somar = () => {

    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    setResultado(numeroInt + segundoNumeroInt)

  }

  return (
    <div className="App">

      Número 1: <br/>

      <input type="text" value={numero}
             onChange={e => setNumero(e.target.value)}/><br/>

      Número 2: <br/>

      <input type="text" value={segundoNumero}
             onChange={e => setSegundoNumero(e.target.value)}/><br/>

      <button onClick={somar}>Somar</button>

      Resultado: <br/>
      <input type="text" value={resultado} /><br/>
      
    </div>
  );
}

export default useStateF;
