var valor;

function sortear(){
    valor = Math.floor(Math.random() * 6);
    alert("Dado sorteado");
    exibir();
}
function exibir(){
    if (valor == 0){
        document.getElementById("dado").innerHTML = '<table><tr><th></th><th></th><th></th></tr><tr><th></th><td></td><th></th></tr><tr><th></th><th></th><th></th></tr></table>'
    }
    if (valor == 1){
        document.getElementById("dado").innerHTML = '<table><tr><td></td><th></th><th></th></tr><tr><th></th><th></th><th></th></tr><tr><th></th><th></th><td></td></tr></table>'
    }
    if (valor == 2){
        document.getElementById("dado").innerHTML = '<table><tr><th></th><th></th><td></td></tr><tr><th></th><td></td><th></th></tr><tr><td></td><th></th><th></th></tr></table>'
    }
    if (valor == 3){
        document.getElementById("dado").innerHTML = '<table><tr><td></td><th></th><td></td></tr><tr><th></th><th></th><th></th></tr><tr><td></td><th></th><td></td></tr></table>'
    }
    if (valor == 4){
        document.getElementById("dado").innerHTML = '<table><tr><td></td><th></th><td></td></tr><tr><th></th><td></td><th></th></tr><tr><td></td><th></th><td></td></tr></table>'
    }
    if (valor == 5){
        document.getElementById("dado").innerHTML = '<table><tr><td></td><th></th><td></td></tr><tr><td></td><th></th><td></td></tr><tr><td></td><th></th><td></td></tr></table>'
    }
    alert(`O valor do dado é ${valor+1}!`);
}
