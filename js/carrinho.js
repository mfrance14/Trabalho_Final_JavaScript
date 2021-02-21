/* JS da página de listagem de pedidos*/
let guardalivros = [];
function recuperalivros(){
    guardalivros = JSON.parse(sessionStorage.getItem('adicionalivros'));
    console.log(guardalivros);
    exibirpedidos();
}
recuperalivros();

function exibirpedidos(){
    let main = document.querySelector("#livros");
    for(let i = 0; i < guardalivros.length; i++){
        let divpedidos = document.createElement("div");
        let img = document.createElement("img");
        let nome = document.createElement("h5");
        let preco = document.createElement("p");
    
        img.src = guardalivros[i].imagem;
        img.className = "card-img";
        nome.innerHTML = guardalivros[i].nome;
        preco.innerHTML = `R$ ${guardalivros[i].preco}`;

        divpedidos.className = "card-pedidos";
        divpedidos.appendChild(img);
        divpedidos.appendChild(nome);
        divpedidos.appendChild(preco);

        main.appendChild(divpedidos);
    }

}

let dadosusuario = [];

function enviardados(){
    let nome = document.getElementById("nome-completo").value;
    let rua = document.getElementById("rua").value;
    let bairro = document.getElementById("bairro").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("city").value;
    let pais = document.getElementById("pais").value;

    let dados = {
        "nome":`${nome}`,
        "rua":`${rua}`,
        "bairro":`${bairro}`,
        "numero":`${numero}`,
        "cidade":`${cidade}`,
        "pais":`${pais}`
    }

    dadosusuario.push(dados);
    let enviar = JSON.stringify(dadosusuario);
    sessionStorage.setItem('dadosusuario',enviar);
    enviar = JSON.stringify(guardalivros);
    sessionStorage.setItem('guardalivros',enviar);
    console.log (dados);


}
