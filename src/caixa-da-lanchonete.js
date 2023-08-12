import Cardapio from "./cardapio.js";
const cardapio = new Cardapio().getCardapio();
const formasDePagamento =['debito','credito','dinheiro'];

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let listaDeItens = []
        let valorTotal = 0;
        let pratoPrincipal = true;
        if (itens.length === 0) {
          return "Não há itens no carrinho de compra!"
        }
        else if (formasDePagamento.includes(metodoDePagamento) === false) {
          return "Forma de pagamento inválida!";
        }
        else {
          const objetoDeItens = [];
          let mensagem = "";
      
          itens.forEach((str, index) => {
            let arr = str.split(",");
            let atual = parseFloat(arr[1]);
            if (mensagem != "") {
              return mensagem;
            }
            else if (atual <= 0) {
              mensagem = "Quantidade inválida!";
              index = index.length + 1;
            }
            else if (verificarItem(arr[0]) === false) {
              mensagem = "Item inválido!"
              index = index.length + 1;
            }
            else {
      
              objetoDeItens.push({
                codigo: arr[0],
                quantidade: parseFloat(arr[1])
              })
      
            }
          })
          if (mensagem !== "") {
            return mensagem;
          }
          else {
            const pedidosDetalhados = objetoDeItens.map(pedido => {
              const itemCardapio = cardapio.find(item => item.codigo === pedido.codigo)
      
              return { ...itemCardapio, quantidade: pedido.quantidade }
            });
            listaDeItens = pedidosDetalhados;
      
          }
      
      
          listaDeItens.forEach((obj) => {
            if (obj.codigo === 'chantily') {
              pratoPrincipal = listaDeItens.some(obj => obj.codigo === 'cafe')
            }
            else if (obj.codigo === 'queijo') {
              pratoPrincipal = listaDeItens.some(obj => obj.codigo === 'sanduiche')
              valorTotal += (obj.valor) * (obj.quantidade);
            }
            else if (obj.codigo === 'combo1' || obj.codigo === 'combo2') {
              pratoPrincipal = listaDeItens.some(obj => obj.codigo === 'sanduiche' || obj.codigo === 'cafe')
              valorTotal += (obj.valor) * (obj.quantidade);
            }
            else{
              valorTotal += (obj.valor) * (obj.quantidade);
            }
      
      
      
          })
      
          if (pratoPrincipal == false) {
            return "Item extra não pode ser pedido sem o principal"
          }
      
          if (metodoDePagamento === 'credito') {
            let acrescimo = valorTotal * 0.03
            let valorFinal = `R$ ${(valorTotal + acrescimo).toFixed(2)}`.replace(".", ",");
      
            return valorFinal;
          }
          else if (metodoDePagamento === 'dinheiro') {
            let desconto = valorTotal * 0.05;
            let valorFinal = `R$ ${(valorTotal - desconto).toFixed(2)}`.replace(".", ",");
      
            return valorFinal;
          }
          else {
            return `R$ ${(valorTotal).toFixed(2)}`.replace(".", ",");
          }
      
        }
      
      }
      
    }

    function verificarItem(codigo) {
        const presenca = cardapio.some((item) => item.codigo === codigo);
        return presenca;
      
      }

export { CaixaDaLanchonete };
