class Cardapio{

   cardapio = [
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
            extra: true,
            dependencia:['cafe']
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
            extra: true,
            dependencia:['sanduiche']
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
            extra: true,
            dependencia:["cafe","suco","sanduiche","salgado"]
        },
        {
            codigo: "combo2",
            descricao: "1 Café e 1 Sanduíche",
            valor: 7.50,
            extra: true,
            dependencia:["cafe","suco","sanduiche","salgado"]
        },
    
    ]


   getCardapio(){
    return this.cardapio;
   } 
}



export default Cardapio