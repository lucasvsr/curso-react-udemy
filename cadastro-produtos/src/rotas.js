/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import CadastroProduto from './components/views/produtos/cadastro'
import Home from './components/views/home'

export default () => {

    return (

        <HashRouter>

            <Switch>

                <Route exact
                       path="/cadastro-produtos" 
                       component={CadastroProduto} />

                <Route exact
                       path="/" 
                       component={Home} />
                       
            </Switch>

        </HashRouter>

    )

}