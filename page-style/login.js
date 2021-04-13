var listaContas = ["Adrian", 123];

var usuario = document.getElementById('username');
var senha = document.getElementById('password');

var cadastrou = document.getElementById('sucesso');
var cadastrado = false;

cadastrou.style = "display:none";

function fazerLogin(){
    var user = usuario.value;
    var pass = senha.valuer;
    if(user == listaContas[0] && pass == listaContas[1]){
        window.location.assing("index.html");
    }

}

function adicionarNaLista(){
    var nameCadastro = usuario.value;
    var passwordCadastro = senha.value;
    if(nameCadastro == listaContas[0] && passwordCadastro == listaContas[1]){
        console.log(nameCadastro + " Você já está cadastrado!");
        cadastrado = true;
        usuario.value = "";
    }
    
    if(cadastrado == true){
        alert(nameCadastro + " Você já está cadastrado!")
        usuario.value = "";
        cadastrado = false;
    }else if (nameCadastro != listaContas[0] && passwordCadastro != listaContas[1] && cadastrado == false){
        listaContas.push(nameCadastro, passwordCadastro);
        cadastrou.style = "display:block";
        console.log(listaContas);
    }
}
