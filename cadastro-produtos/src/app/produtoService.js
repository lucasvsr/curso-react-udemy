
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

    obterIndex = (sku) => {

        console.log('obterIndex');

       let index = null;
       
       this.carregar().forEach((produto, i) => {

            if(produto.sku === sku) index = i

       })

       console.log('saiu obterIndex');

       return index

    }

    salvar = (produto) => {

        this.validar(produto)

        let produtos = localStorage.getItem(PRODUTOS)
       

        if(!produtos) {

            produtos = []
            console.log(produto);

        } else {

            produtos = JSON.parse(produtos)

        }

        let index = this.obterIndex(produto.sku)
        console.log(index);

        if(index === null) {

            produtos.push(produto)

        } else {

            produtos[index] = produto

        }

        console.log('salvar');
        localStorage.setItem(PRODUTOS, JSON.stringify(produtos))

    }

    carregar = (sku) => {

        let produtos = JSON.parse(localStorage.getItem(PRODUTOS))

        if(!produtos) produtos = []

        if(sku) {
            
           return produtos.filter(produto => produto.sku === sku)

        }

        return produtos

    }
    
    deletar = (sku) => {

        const index = this.obterIndex(sku)

        if(index !== null) {

            const produtos = this.carregar()

            produtos.splice(index, 1)

            localStorage.setItem(PRODUTOS, JSON.stringify(produtos))

            return produtos

        }

    }

}