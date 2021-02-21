let livros = [];
let dados =  [];

function recupera(){
    dados = JSON.parse(sessionStorage.getItem('dadosusuario'));
    livros = JSON.parse(sessionStorage.getItem('guardalivros'));
    
    console.log(livros);
    console.log(dados);
    exibirResumo();
}
recupera();

function frete(){
    let max = Math.floor(20); // numero max de dias
    let min = Math.ceil(7); // numero min de dias
    return Math.floor(Math.random()*(max-min)+min);
}

function exibirResumo(){
    let main = document.querySelector("main");
    let titulo = document.createElement("h2");
    let info = document.createElement ("div");
    let nome = document.createElement ("p");
    let rua = document.createElement ("p");
    let bairro = document.createElement ("p");
    let numero = document.createElement ("p");
    let cidade = document.createElement ("p");
    let pais = document.createElement ("p");

    titulo.innerHTML = "Resumo da Compra";
    nome.innerHTML = `Nome: ${dados[0].nome}`;
    rua.innerHTML = `Rua: ${dados[0].rua}`;
    bairro.innerHTML = `Bairro: ${dados[0].bairro}`;
    numero.innerHTML = `Número: ${dados[0].numero}`;
    cidade.innerHTML = `Cidade: ${dados[0].cidade}`;
    pais.innerHTML = `País: ${dados[0].pais}`;

    info.appendChild(nome);
    info.appendChild(rua);
    info.appendChild(bairro);
    info.appendChild(numero);
    info.appendChild(cidade);
    info.appendChild(pais);

    main.appendChild(titulo);
    main.appendChild(info);

    for(let i = 0; i < livros.length; i++){
        let divpedidos = document.createElement("div");
        let img = document.createElement("img");
        let nome = document.createElement("h5");
        let preco = document.createElement("p");
    
        img.src = livros[i].imagem;
        img.className = "card-img";
        nome.innerHTML = livros[i].nome;
        preco.innerHTML = `R$ ${livros[i].preco}`;

        divpedidos.className = "card-pedidos";
        divpedidos.appendChild(img);
        divpedidos.appendChild(nome);
        divpedidos.appendChild(preco);

        main.appendChild(divpedidos);
    }

    let diasfrete = frete();
    let fretes = document.createElement("h2");
    fretes.innerHTML = `A sua compra chegará em ${diasfrete} dias`;
    main.appendChild(fretes);

}
