/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CadastroProduto from './components/views/produtos/cadastro'
import Home from './components/views/home'
import ConsultaProdutos from './components/views/produtos/consulta'


export default () => {

    return (

            <Switch>

                <Route exact
                       path="/cadastro-produtos/:sku?" 
                       component={CadastroProduto} />

                <Route exact
                       path="/" 
                       component={Home} />

                <Route exact
                       path="/consulta-produtos" 
                       component={ConsultaProdutos} />
                       
            </Switch>


    )

}