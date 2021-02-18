function categoria(){
    let listacategoria = [];
    let menulateral = document.querySelector("ul");
    for(let i = 0; i<categorias.length;i++){
        listacategoria.push(categorias[i]); //percorre o arrray e coloca na lista
    }
    for (let j = 0; j < listacategoria.length; j++) {
        let itemlateral = document.createElement("a");
        let item = document.createElement("li");
        itemlateral.innerHTML = listacategoria[j];
        item.appendChild(itemlateral);
        menulateral.appendChild(item);
        
    } 
}
categoria();

function cards(){
    let categoriaAnterior = 0;
    let listacards = [];
    
    let cardslivros = document.querySelector("main");
    for(let i = 0; i<livros.length;i++){
        listacards.push(livros[i]); //percorre o arrray e coloca na lista
    }
    
    for(let w = 0; w<categorias.length;w++){
        let divcategoria = document.createElement("div");
        divcategoria.id = `${categorias[w]}`;
        let divrow = document.createElement("div");
        divrow.className = "row";
        divcategoria.appendChild(divrow);
        cardslivros.appendChild(divcategoria);
    }
    for (let j = 0; j < listacards.length; j++) {
        let seleciona = `${listacards[j].categoria} row`;
       let categoriaAtual = document.querySelector(seleciona);

       
        let divcolumn2 = document.createElement("div");
        divcolumn2.className("column2");
        let divcard = document.createElement("div");
        divcard.className("card");
        let imagem = document.createElement("img");
        imagem.className("card-img");
        imagem.src = listacards[j].imagem;
        imagem.alt = "Imagem do card";
        let divcardbody = document.createElement("div");
        divcardbody.className("card-body");
        let divcardtitle = document.createElement("h5");
        divcardtitle.className("card-title");
        let divcardtext = document.createElement("p");
        divcardtext.className("card-text");
        let divbutton = document.createElement("a");
        divbutton.className("btn btn-primary");
        divbutton.innerHTML = "Comprar";

        divcardbody.appendChild(divcardtitle);
        divcardbody.appendChild(divcardtext);
        divcardbody.appendChild(divbutton);

        divcard.appendChild(imagem);
        divcard.appendChild(divcardbody);

        divcolumn2.appendChild(divcard);
        
        categoriaAtual.appendChild(divcolumn2);

        categoriaAnterior = listacards[j].categoria;
      
    } 
}
cards();
