const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src= "./imagens/reprovado.png" alt="Emoji decepicionado" />';
const atividades=[];
const notas=[];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha();
    atualizaTabela();
     atualizaMediafinal();7

});

function adicionaLinha(){
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
if (atividades.includes(inputNomeAtividade.value)){
    alert(`Atividade: ${inputNomeAtividade.value} já foi inserida `);
} else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha ='<tr>';
    linha +=`<td>${inputNomeAtividade.value}</td>`;
    linha +=`<td>${inputNotaAtividade.value}</td>`;
    
    linha +='</tr>';
    
    linhas += linha;
}



inputNomeAtividade.value ='';
inputNotaAtividade.value ='';
}

function atualizaTabela(){
const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML =linhas;
}

