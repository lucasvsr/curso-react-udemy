import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

ReactDOM.render(<App nome = "Lucas" />, document.getElementById('root')); // O atributo "nome" é o que chamamos de 'props' e seria uma variavel global do framework, podendo ser acessada de qualquer componente react.