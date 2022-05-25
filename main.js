const cadastroProdutos = require('./negocio/produto_negocio.js')

//Main
/*cadastroProdutos.inserir({nome: "sanduiche", preco:10},
    function(err, produtoInserido) {
        console.log("INSERINDO pastel...")
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("produto inserido: ");
            console.log(produtoInserido);
        }
    });*/

cadastroProdutos.inserir({}, 
    function(err, produtoInserido) {
        console.log("Cenario: produto sem campos");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("produto inserido: ");
            console.log(produtoInserido);
        }
    }
);

cadastroProdutos.inserir({nome: "Prod1"}, 
    function(err, produtoInserido) {
        console.log("Cenario: produto sem preco");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("produto inserido: ");
            console.log(produtoInserido);
        }
    }
);

cadastroProdutos.inserir({nome: "cachorro quente", preco: 12}, 
    function(err, produtoInserido) {
        console.log("Cenario sucesso");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log("produto inserido: ");
            console.log(produtoInserido);
        }
    }
);
/*cadastroProdutos.listar(
    function(err, produtos) {
        console.log("Listar: ");
        if(err) {
            console.log("Sistema esta com problemas");
            console.log(err);
        }
        else {
            console.log(produtos);

        }
    }
);*/

/*cadastroProdutos.buscarPorId(2, 
    function(erro, produto) {
        console.log("BuscarPorId(2): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }

});*/

/*cadastroProdutos.buscarPorId(4, 
    function(erro, produto) {
        console.log("BuscarPorId(4): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }
});*/

/*cadastroProdutos.deletar(7, function(erro, produto) {
    console.log("Produto deletado (7): ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(produto);
    }
});*/

/*cadastroProdutos.atualizar(1, {nome: "torrada", preco: 10.5}, 
    function(erro, produto) {
        console.log("Atualizar Produto(1): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(produto);
        }
});*/




