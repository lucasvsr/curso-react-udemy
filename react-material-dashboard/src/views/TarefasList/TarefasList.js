import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TarefasTable, TarefasToolbar } from './components';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const URL = 'https://minhastarefas-api.herokuapp.com/tarefas';

const TarefasList = () => {
  const classes = useStyles();

  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [mensagem, setMensagem] = useState(['']);

  const salvar = (tarefa) => {

    Axios.post(URL, tarefa, {

      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }

    }).then(response => {
      setTarefas([...tarefas, response.data])
      setMensagem('Tarefa salva com sucesso')
      setOpenDialog(true)
    })
      .catch(err => setMensagem('Ocorreu um erro'))

  }

  const listarTarefas = () => {

    Axios.get(URL, {

      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }

    }).then(resposta => setTarefas(resposta.data))
      .catch(err => setMensagem('Ocorreu um erro'))

  }

  const alterarStatus = (idTarefa) => {

    Axios.patch(`${URL}/${idTarefa}`, null, {

      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }

    }).then(response => {

      const lista = [...tarefas]

      lista.forEach(tarefa => {

        if(tarefa.id === idTarefa) tarefa.done = true

      })

      setTarefas(lista)
      setMensagem('Tarefa atualizada')
      setOpenDialog(true)

    })
      .catch(err => {
        setMensagem('Ocorreu um erro')
        setOpenDialog(true)
      })

  }

  const deletarTarefa = (idTarefa) => {

    Axios.delete(`${URL}/${idTarefa}`, {

      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }

    }).then(response => {

      const lista = tarefas.filter(tarefa => tarefa.id !== idTarefa)

      setTarefas(lista)
      setMensagem('Tarefa removida')
      setOpenDialog(true)

    })
      .catch(err =>{
        setMensagem('Ocorreu um erro')
        setOpenDialog(true)
      })

  }

  useEffect(() => {

    listarTarefas()

  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar} />
      <div className={classes.content}>
        <TarefasTable
          alterarStatus={alterarStatus}
          deletar={deletarTarefa}
          tarefas={tarefas}
        />
      </div>

      <Dialog
        onClose={e => setOpenDialog(false)}
        open={openDialog}
      >
        <DialogTitle>Atenção</DialogTitle>

        <DialogContent>{mensagem}</DialogContent>

        <DialogActions>
          <Button onClick={e => setOpenDialog(false)}>Fechar</Button>
        </DialogActions>

      </Dialog>

    </div>
  );
};

export default TarefasList;
