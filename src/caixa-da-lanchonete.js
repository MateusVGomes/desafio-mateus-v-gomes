import Cardapio from "./cardapio.js";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
   
    const carrinho = itens.map((str) => {
      let [produto, quantidade] = str.split(",");
      quantidade = parseInt(quantidade);
      if (this.mensagem === "") {
        return this.validarProdutoEQuantidade(produto, quantidade)===""?this.converterParaCardapio(produto,quantidade):"";
        
      }


    });
    return this.mensagem!==""?this.mensagem:"";
  }
  validarProdutoEQuantidade(produto, quantidade) {
   return this.mensagem = !this.cardapio.some((item) => item.codigo === produto)
      ? "Item inválido!"
      : quantidade <= 0
      ? (this.mensagem = "Quantidade inválida!")
      : "";
  }
  converterParaCardapio(produto, quantidade) {
    const produtoCardapio= this.cardapio.find(item=>item.codigo===produto);
    this.valorTotal+=produtoCardapio.valor*quantidade
    
    return produtoCardapio;
  }
    definirValorFinal(){}
}

export { CaixaDaLanchonete };
