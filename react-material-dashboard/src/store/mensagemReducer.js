const ACTIONS = {

  EXIBIR_MENSAGEM: 'EXIBIR_MENSAGEM',
  OCULTAR_MENSAGEM: 'OCULTAR_MENSAGEM'

}

const ESTADO_INICIAL = {

  exibir: false,
  mensagem: '',

}

export function mensagemReducer(state = ESTADO_INICIAL, action) {

  switch(action.type) {

    case ACTIONS.EXIBIR_MENSAGEM:
      return {...state, mensagem: action.mensagem, exibir: true}

    case ACTIONS.OCULTAR_MENSAGEM:
      return {...state, mensagem: action.mensagem, exibir: false}
    
    default:
      return state

  }

}

export function mostrar(mensagem) {

  return {

    type: ACTIONS.EXIBIR_MENSAGEM,
    mensagem: mensagem

  }

}

export function ocultar() {

  return {

    type: ACTIONS.OCULTAR_MENSAGEM,
    mensagem: ''

  }

}
