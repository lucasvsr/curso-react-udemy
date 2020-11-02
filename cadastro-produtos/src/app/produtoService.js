
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(errors) {

    this.errors = errors

}

export default class ProdutoService {

    validar = (produto) => {

        const errors = []

        if(!produto.nome) errors.push('O campo nome é obrigatório')
        if(!produto.sku) errors.push('O campo SKU é obrigatório')
        if(!produto.preco || produto.preco <= 0) errors.push('O campo preço deve ter valor maior que zero')
        if(!produto.fornecedor) errors.push('O campo fornecedor é obrigatório')

        if(errors.length > 0) {

            throw new ErroValidacao(errors)

        }

    }

    salvar = (produto) => {

        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)

        if(!produtos) {

            produtos = []

        } else {

            produtos = JSON.parse(produtos)

        }

        produtos.push(produto)

        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))

    }

    carregar = (sku) => {

        let produtos = JSON.parse(localStorage.getItem(PRODUTOS))

        if(sku) {
            
           return produtos.filter(produto => produto.sku === sku)

        }

        return produtos

    }
    
}