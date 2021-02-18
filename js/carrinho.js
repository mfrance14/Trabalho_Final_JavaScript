/* JS da página de listagem de pedidos*/
let guardalivros = [];
function recuperalivros(){
    guardalivros = JSON.parse(sessionStorage.getItem('adicionalivros'));
    console.log(guardalivros);
    exibirpedidos();
}
recuperalivros();

function exibirpedidos(){
    let main = document.querySelector("main");
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