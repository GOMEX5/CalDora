function resultado(  ){
var input = document.getElementById( 'valor' );
var valor = input.value;
input.value = eval( valor );
}
function reset(  ){
document.cal.valor.value=" ";
}