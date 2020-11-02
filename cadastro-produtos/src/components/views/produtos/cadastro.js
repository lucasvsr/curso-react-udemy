/* eslint-disable no-useless-constructor */
import React from 'react'
import { withRouter } from 'react-router-dom'
import ProdutoService from '../../../app/produtoService'

const estadoInicial = {

    nome: '',
    sku: '',
    descricao: '',
    preco: '',
    fornecedor: '',
    sucesso: false,
    errors: []

}

class CadastroProduto extends React.Component {

    state = estadoInicial

    constructor() {

        super()
        this.service = new ProdutoService()
    }

    onChange = (event) => {

        const valor = event.target.value
        const campo = event.target.name

        this.setState({ [campo]: valor })

    }

    onSubmit = (event) => {

        let produto = {

            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor

        }

        try {
            
            this.service.salvar(produto);
            this.limparCampos()
            this.setState({sucesso : true})

        } catch (error) {

            const errors = error.errors
            this.setState({errors: errors})
            
        }
        
        

    }

    limparCampos = () => {

        this.setState(estadoInicial)

    }

    componentDidMount() {

        const sku = this.props.match.params.sku


        if(sku) {

            let produtos = this.service.carregar(sku)

            if(produtos.length === 1) {

                const produto = produtos[0]
                this.setState({ ...produto })

            }

        } else {

            this.setState({ estadoInicial })

        }

    }

    render() {

        return(

            <>

            <div className="card text-white bg-primary mb-3">
                <div className="card-header">CADASTRO DE PRODUTOS</div>

                <div className="card-body">

                    {
                        this.state.sucesso && //O && diz que não precisa informar o caso contrário (quando for false)
                        (

                            <div class="alert alert-dismissible alert-success">
                                <button type="button"
                                    class="close"
                                    data-dismiss="alert">&times;</button>
                                <strong>Produto cadastro.</strong> Pode buscá-lo no catalogo
                            </div>

                        )
                    }

                    {
                        this.state.errors && this.state.errors.length > 0 &&

                        this.state.errors.map(error => {

                            return(

                                <div class="alert alert-dismissible alert-danger">
                                    <button type="button"
                                        class="close"
                                        data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {error}
                                </div>

                            )

                        })
                        
                    }

                    
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">

                                <label>Nome: *</label>
                                <input type="text" 
                                       className="form-control"
                                       value={this.state.nome}
                                       name="nome"
                                       onChange={this.onChange} />

                            </div>
                        </div>

                        <div className="col-md-6">

                            <div className="form-group">

                                <label>SKU: *</label>
                                <input type="text" 
                                       className="form-control"
                                       value={this.state.sku}
                                       name="sku"
                                       onChange={this.onChange} />

                            </div>
                            
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-12">

                            <div className="form-group">

                                <label>Descrição: *</label>
                                <textarea className="form-control" 
                                          value={this.state.descricao}
                                          name="descricao" 
                                          onChange={this.onChange}/>

                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">

                                <label>Preço: *</label>
                                <input type="text" 
                                       className="form-control"
                                       value={this.state.preco}
                                       name="preco"
                                       onChange={this.onChange}
                                       placeholder="0" />

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">

                                <label>Fornecedor: *</label>
                                <input type="text"
                                       className="form-control" 
                                       value={this.state.fornecedor}
                                       name="fornecedor"
                                       onChange={this.onChange} />

                            </div>
                        </div>

                    </div>

                    <div className="row">

                    <div className="col-md-1">

                        <button className="btn btn-success" 
                                onClick={this.onSubmit}>Salvar</button>

                    </div>

                    <div className="col-md-1">

                        <button className="btn btn-danger" 
                                onClick={this.limparCampos}>Limpar</button>

                    </div>

                    </div>
                    
                </div>

            </div>

            </>

        )

    }
    
}

export default withRouter(CadastroProduto)