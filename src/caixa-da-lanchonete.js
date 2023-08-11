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

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const objetoDeItens = [];
  let mensagem = "";
  itens.forEach((str) => {
    let arr = str.split(",");
    let atual = parseFloat(arr[1]);
       if (atual<=0||mensagem!=""){
             mensagem = "Quantidade inválida!";
           return mensagem;
    }
    
    else{

    objetoDeItens.push({
      codigo: arr[0],
      quantidade: arr[1]
    })
      
      }
  })
if(mensagem!==""){
  return mensagem;
}
else{
  const pedidosDetalhados = objetoDeItens.map(pedido => {
    const itemCardapio = cardapio.find(item => item.codigo === pedido.codigo)
    return { ...itemCardapio, quantidade: pedido.quantidade }
  });

  return pedidosDetalhados;
}

    }

}

export { CaixaDaLanchonete };
