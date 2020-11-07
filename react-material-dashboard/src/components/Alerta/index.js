import React from 'react'
import {Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core'

export default function Alerta (props) {

  return(
    
    <Dialog
      onClose={props.ocultarAction}
      open={props.exibir}
    >
      <DialogTitle>Atenção</DialogTitle>

      <DialogContent>{props.mensagem}</DialogContent>

      <DialogActions>
        <Button onClick={props.ocultarAction}>Fechar</Button>
      </DialogActions>

    </Dialog>
    
  )

}
