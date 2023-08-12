import Cardapio from "./cardapio.js";
class CaixaDaLanchonete {
  cardapio = new Cardapio().getCardapio();

  formasDePagamento = ["debito", "credito", "dinheiro"];
   valorTotal=0;
   mensagem=""
  calcularValorDaCompra(metodoDePagamento, itens) {
   this.mensagem=this.validarEntradas(metodoDePagamento,itens);
   if(this.mensagem===""){ 
   const carrinho = itens.map((str) => {
      let [produto, quantidade] = str.split(",");
      quantidade = parseInt(quantidade);
      if (this.mensagem === "") {
        return this.validarProdutoEQuantidade(produto, quantidade)===""?this.converterParaCardapio(produto,quantidade):"";    
     }
    });
  this.validarPratoPrincipal(carrinho)
  }

  return this.mensagem!==""?this.mensagem:this.definirValorFinal(metodoDePagamento);
  }
  validarEntradas(metodoDePagamento,itens){
    return !this.formasDePagamento.includes(metodoDePagamento)?"Forma de pagamento inválida!":itens.length<=0?"Não há itens no carrinho de compra!":"";
  }
  validarProdutoEQuantidade(produto, quantidade) {
   return this.mensagem = !this.cardapio.some((item) => item.codigo === produto)
      ? "Item inválido!"
      : quantidade <= 0
      ? (this.mensagem = "Quantidade inválida!")
      : "";
  }
  validarPratoPrincipal(carrinho){
   for(let i = 0; i<carrinho.length;i++){
        if(carrinho[i].extra===true){
   let pratoPrincipal=!carrinho[i].dependencia.some((dep)=>carrinho.some((obj)=>obj.codigo===dep))?this.mensagem="Item extra não pode ser pedido sem o principal":"";
      if(pratoPrincipal!==""){
        this.mensagem=pratoPrincipal;
        break;
      }
     }
   }
  }
  converterParaCardapio(produto, quantidade) {
    const produtoCardapio= this.cardapio.find(item=>item.codigo===produto);
    this.valorTotal+=produtoCardapio.valor*quantidade 
    return produtoCardapio;
  }
 
  definirValorFinal(metodoDePagamento){
      let valorFinal;   
      metodoDePagamento==="credito"?valorFinal=this.valorTotal+(this.valorTotal*0.03):metodoDePagamento==="dinheiro"?valorFinal=this.valorTotal-(this.valorTotal*0.05):valorFinal=this.valorTotal;
      valorFinal=`R$ ${valorFinal.toFixed(2)}`.replace(".",",")
      return valorFinal ;
    }


}
export { CaixaDaLanchonete };
