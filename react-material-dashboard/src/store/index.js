import { combineReducers } from 'redux'
import { mensagemReducer } from './mensagemReducer'
import { tarefaReducer } from './tarefasReducer'

const mainReducer = combineReducers({

  tarefas: tarefaReducer,
  mensagens: mensagemReducer

})

export default mainReducer
