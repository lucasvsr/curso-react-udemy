import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ocultar } from '../../store/mensagemReducer';
import { alterar, listar, remover, salvar } from '../../store/tarefasReducer';
import { TarefasTable, TarefasToolbar } from './components';
import Alerta from '../../components/Alerta'



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TarefasList = (props) => {
  const classes = useStyles();

  useEffect(() => {

    props.listar()

  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={props.salvar} />
      <div className={classes.content}>
        <TarefasTable
          alterarStatus={props.alterar}
          deletar={props.remover}
          tarefas={props.tarefas}
        />
      </div>

      <Alerta
        ocultarAction={props.ocultar}
        exibir={props.exibir}
        mensagem={props.mensagem}/>

    </div>
  );
};

const mapStateToProps = state => ({

  tarefas: state.tarefas.tarefas,
  mensagem: state.mensagens.mensagem,
  exibir: state.mensagens.exibir


})

const mapDispatchToProps = dispatch => 
  bindActionCreators({listar, salvar, alterar, remover, ocultar}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TarefasList);
