//captura de elementos
const btSalvar =  document.querySelector('#form button[type=submit]');
const inputTexto = document.getElementById("texto")

const lista =  document.getElementById('task-list')
//definição das funções a serem executadas

const onBtSalvarClick =(evento)=>{
    evento.preventDefault();
    //1.capturar texto  digitado no campo
    let texto = inputTexto.value;
    //2.criar um objeto tarefa : {texto:"texto digitado, feito:"false"}

    //3.adicionar esse obj no array de tarefas;

    //4.adicionar uma tarefa na dom
    //4.1 criar um novo elemento li
    let li =document.createElement('li');

    //4.2 add conteudo no novo li 
    li.innerHTML = `
        
                <input type="checkbox" id="check_1">
                <label for="check_1">${texto}</label>
                <i class="material-icons">delete</i>
            `
    //4.3 add esse novo li na lista
    lista.appendChild(li)
}

//pressionando tecla
    const onInputTextoKeyDown = (evento)=>{
        

    }

//conexão de evento á função (evento handler)
//formar 1 (feia)
    btSalvar.onclick = onBtSalvarClick;
    inputTexto.onkeydown = onInputTextoKeyDown;


