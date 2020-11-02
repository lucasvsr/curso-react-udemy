import React from 'react'
import ProdutoService from '../../../app/produtoService'

export class ConsultaProdutos extends React.Component {

    constructor() {

        super()
        this.service = new ProdutoService()

    }

    state = {

        produtos: []

    }

    carregarProdutos = () => {

        let produtos = this.service.carregar()

        if(!produtos) throw new Error('Não tem produtos')

        this.setState({produtos: produtos})

    }

    componentDidMount() {

        const produtos = this.service.carregar()
        this.setState({produtos})

    }

    render() {

        return(

            <div className="card text-white bg-primary mb-3">
                <div className="card-header">CADASTRO DE PRODUTOS</div>

                <div className="card-body">

                    <table className="table">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">Produto</th>
                                <th scope="col">SKU</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Fornecedor</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.produtos.map((produto, index) => { //index é usado para evitar um warning no console do navegador
                            
                                return(
                                
                                    <tr className="table-secondary" key={index}>
                                    
                                        <th scope="row">{produto.nome}</th>
                                        <th scope="row">{produto.sku}</th>
                                        <th scope="row">{produto.preco}</th>
                                        <th scope="row">{produto.fornecedor}</th>
                                        <th scope="row"></th>

                                    </tr>

                                )
                                
                                })
                            
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }

}