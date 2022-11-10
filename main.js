console.log("script linkado!");

//captura de elementos
const btSalvar =  document.querySelector('#form button[type=submit]');
const inputTexto = document.getElementById("texto")

//definição das funções a serem executadas

const onBtSalvarclick =()=>{
    console.log("Botão salvar foi clicado");
    alert("foi clicado!")
}

//pressionando tecla
const onInputTextoKeyDown = (evento)=>{
    console.log("Tecla pressionada...")
    console.log(evento);
}

//conexão de evento á função (evento handler)
//formar 1 (feia)
btSalvar.onClick = onBtSalvarClick;
inputTexto.onkeydown = onInputTextoKeyDown;


