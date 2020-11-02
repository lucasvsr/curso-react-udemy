import React from 'react'
import { withRouter } from 'react-router-dom'
import ProdutoService from '../../app/produtoService'
import Card from '../../components/card'
import ProdutosTable from './produtoTable'

class ConsultaProdutos extends React.Component {

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

    preparaEditar = (sku) => {

        console.log('sku para editar: ', sku);

        this.props.history.push(`/cadastro-produtos/${sku}`)

    }

    deletar = (sku) => {

        const produtos = this.service.deletar(sku)
        this.setState({produtos})
    }

    render() {

        return(

            <Card header="PRODUTOS">

                <ProdutosTable produtos={this.state.produtos} 
                               editarAction={this.preparaEditar} 
                               deletarAction={this.deletar} />
                
            </Card>

        )

    }

}

export default withRouter(ConsultaProdutos)