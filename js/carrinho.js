/* JS da página de listagem de pedidos*/
let guardalivros = [];
function recuperalivros(){
    guardalivros = JSON.parse(sessionStorage.getItem('adicionalivros'));
    console.log(guardalivros);
}
recuperalivros();