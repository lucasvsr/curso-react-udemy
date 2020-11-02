/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default (props) => (

    <table className="table table-hover">
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
            { props.produtos.map((produto, index) => { //index é usado para evitar um warning no console do navegador
                return(
                
                    <tr className="table-secondary" key={index}>
                    
                        <th scope="row">{produto.nome}</th>
                        <th scope="row">{produto.sku}</th>
                        <th scope="row">{produto.preco}</th>
                        <th scope="row">{produto.fornecedor}</th>
                        <th scope="row">
                            
                            <button className="btn btn-outline-primary"
                                    onClick={() => props.editarAction(produto.sku)}>Editar</button>   
                            
                            <button className="btn btn-outline-danger"
                                    onClick={() => props.deletarAction(produto.sku)}>Remover</button>
                        </th>   
                    </tr>   
                )
                
                })
            
            }
        </tbody>
    </table>

)