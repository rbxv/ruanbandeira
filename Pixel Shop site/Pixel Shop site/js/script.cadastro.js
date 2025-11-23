// Validação dos campos de cadastro (Vai alertar erro quando houver erro e quando corrigido será alertado também )
const form = document.getElementById('form')
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.Span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

// Apresentar o alerta quando faltar alguma informação
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    cpfValidate();
    generoValidate();
});

// Funções de erros: Um para notificar (seterror) e outro para retirar (removeError)
function setError(index) {
    campos[index].style.border = '2px solid #ff0000ff'
    spans[index].style.display = 'block';
}
function removeError(index) {
    campos[index].style.border = '2px solid #4eff0eff';
    spans[index].style.display = 'block';
    spans[index].style.color = '#11ff00ff'
    spans[index].innerText = 'Campo validado com sucesso';
}

// Função de validação: Nome
function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

// Função de validação: Email
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

// Função de validação: Senha
function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
    }
}

// Função de validação: CPF
function cpfValidate() {
    if (campos[3].value.length < 11) {
        setError(3);
    }
    else {
        removeError(3);
    }
}

// Função de validação: Gênero
function generoValidate() {
    const generoSelect = document.getElementById('genero'); // Pega o elemento "genero"
    const spanGenero = document.getElementById('span-genero'); // Pega o elemento "span-genero"

// Verifica se nenhuma opção foi selecionada (valor vazio)
    if (generoSelect.value === "") {
        setError(4); 
        spanGenero.style.display = 'block'; // Pra aparecer na tela
        spanGenero.style.color = '#ff0000ff'; // A letra fica vermelha
        spanGenero.innerText = 'Selecione seu gênero'; // Texto de erro
        return false;
    } else {
        removeError(4); 
        spanGenero.style.display = 'block'; // Para aparecer na tela
        spanGenero.style.color = '#4eff0eff'; // A letra fica verde
        spanGenero.innerText = 'Campo validado com sucesso'; // Texto de sucesso
        return true;
    }
}