const cardapio = [
    {
        codigo: "cafe",
        descricao: "Café",
        valor: 3.00,
        extra: false
    },
    {
        codigo: "chantily",
        descricao: "Chantily (extra do Café)",
        valor: 1.50,
        extra: true
    },
    {
        codigo: "suco",
        descricao: "Suco Natural",
        valor: 6.20,
        extra: false
    },
    {
        codigo: "sanduiche",
        descricao: "Sanduíche",
        valor: 6.50,
        extra: false
    },
    {
        codigo: "queijo",
        descricao: "Queijo (extra do Sanduíche)",
        valor: 2.00,
        extra: true
    },
    {
        codigo: "salgado",
        descricao: "Salgado",
        valor: 7.25,
        extra: false
    },
    {
        codigo: "combo1",
        descricao: "1 Suco e 1 Sanduíche",
        valor: 9.50,
        extra: false
    },
    {
        codigo: "combo2",
        descricao: "1 Café e 1 Sanduíche",
        valor: 7.50,
        extra: false
    },

]
const formasDePagamento =['debito','credito','dinheiro'];
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let listaDeItens=[]
        let valorTotal=0;
        if (itens.length === 0) {
          return "Não há itens no carrinho de compra!"
        }
        else if(formasDePagamento.includes(metodoDePagamento)===false){
            return "Forma de pagamento inválida!";
        }
        else{
        const objetoDeItens = [];
        let mensagem = "";
        itens.forEach((str) => {
          let arr = str.split(",");
          let atual = parseFloat(arr[1]);
          if (atual <= 0 || mensagem != "") {
            mensagem = "Quantidade inválida!";
            return mensagem;
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
    listaDeItens=pedidosDetalhados;
      
        }
        
        listaDeItens.forEach((obj,index)=>{
          valorTotal+=(obj.valor)*(obj.quantidade);
        })
       
        if(metodoDePagamento==='credito'){
               let acrescimo=valorTotal*0.03
               let valorFinal=`R$ ${(valorTotal+acrescimo).toFixed(2)}`.replace(".",",");
               
               return valorFinal;
        }
        else if(metodoDePagamento==='dinheiro'){
          let desconto=valorTotal*0.05;
          let valorFinal=`R$ ${(valorTotal-desconto).toFixed(2)}`.replace(".",",");
          
          return valorFinal;
        }
        else{
          return `R$ ${(valorTotal).toFixed(2)}`.replace(".",",");
        }
        
    }
      }

    }



export { CaixaDaLanchonete };
