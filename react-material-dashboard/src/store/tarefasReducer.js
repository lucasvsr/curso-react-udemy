/* eslint-disable no-case-declarations */
import Axios from 'axios'
import { mostrar } from './mensagemReducer'

const http = Axios.create({

  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }

})

const ACTIONS = {

  LISTAR: 'TAREFAS_LISTAR',
  SALVAR: 'TAREFAS_SALVAR',
  ALTERAR: 'TAREFAS_ALTERAR',
  REMOVER: 'TAREFAS_REMOVER'

}

const ESTADO_INICIAL = {

  tarefas: [],
  quantidade: 0

}

const retornarLista = (tarefas, tipo, id) => {

  if(tipo === ACTIONS.ALTERAR) {

    const lista = [...tarefas]

    tarefas.forEach(tarefa => {

      if(tarefa.id === id) tarefa.done = true
      
    })

    tarefas = [...lista]
    return tarefas

  }

  return tarefas.filter(tarefa => tarefa.id !== id)

}

export const tarefaReducer = (state = ESTADO_INICIAL, action) => {

  switch(action.type) {

    case ACTIONS.LISTAR:
      return {...state, 
        tarefas: action.tarefas,
        quantidade: action.tarefas.length}
    
    case ACTIONS.SALVAR:
      const listaSalvar = [...state.tarefas, action.tarefa]
      return {...state, 
        tarefas: listaSalvar,
        quantidade: listaSalvar.length}
    
    case ACTIONS.ALTERAR:
      const listaAlteracao = [...state.tarefas]
      return {...state, 
        tarefas: retornarLista(state.tarefas, action.type, action.id),
        quantidade: listaAlteracao.length}
    
    case ACTIONS.REMOVER:
      const listaSemRemovido = retornarLista(state.tarefas, action.type, action.id)
      return {...state, 
        tarefas: listaSemRemovido,
        quantidade: listaSemRemovido.length}
    
    default:
      return state

  }


}

export function listar() {

  return dispatch => {

    http.get('/tarefas')
      .then(response => {

        dispatch({

          type: ACTIONS.LISTAR,
          tarefas: response.data

        })

      })

  }

}

export function salvar(tarefa) {

  return dispatch => {

    http.post('/tarefas', tarefa)
      .then(response => {

        dispatch([{

          type: ACTIONS.SALVAR,
          tarefa: response.data,

        },
        mostrar('Tarefa salva com sucesso!')])

      })

  }

}

export function alterar(id) {

  return dispatch => {

    http.patch(`/tarefas/${id}`, null)
      .then(response => {

        dispatch([{

          type: ACTIONS.ALTERAR,
          id: id

        }, mostrar('Tarefa alterada com sucesso!')])

      })

  }
  
}

export function remover(id) {

  return dispatch => {

    http.delete(`/tarefas/${id}`)
      .then(response => {

        dispatch([{

          type: ACTIONS.REMOVER,
          id: id

        }, mostrar('Tarefa excluída com sucesso!')])

      })

  }

}
