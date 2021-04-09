var listaContas = ["Adrian", 123];

var usuario = document.getElementById('username');
var senha = document.getElementById('password');

var cadastrou = document.getElementById('sucesso');
var cadastrado = false;

cadastrou.style = "display:none";

function adicionarNaLista(){
    var name = usuario.value;
    var password = senha.value;
    if(name == listaContas[0] && password == listaContas[1]){
        console.log(name + " Você já está cadastrado!");
        cadastrado = true;
        usuario.value = "";
    }
    
    if(cadastrado == true){
        alert(name + " Você já está cadastrado!")
        usuario.value = "";
        cadastrado = false;
    }else if (name != listaContas[0] && password != listaContas[1] && cadastrado == false){
        listaContas.push(name, password);
        cadastrou.style = "display:block";
        console.log(listaContas);
    }
}
