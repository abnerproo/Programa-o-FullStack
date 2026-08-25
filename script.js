console.log
const cep = document.querySelector("#cep");
const btnBuscar = document.querySelector("#btnBuscar");

const estado = document.querySelector("#estado");
const cidade = document.querySelector("#cidade");
const bairro = document.querySelector("#bairro");
const rua = document.querySelector("#rua");
const ibge = document.querySelector("#ibge");

btnBuscar.addEventListener("click", function () {
    let valorCep = cep.value.replace(/\D/g, '');

    if (valorCep.length !== 8) {
        alert("CEP inválido. Por favor, insira um CEP válido com 8 dígitos.");
        return;
    }
    fetch(`https://viacep.com.br/ws/${valorCep}/json/`)
        .then(response => response.json())
        .then(dados => {

            if (dados.erro) {
                alert("CEP não encontrado. Por favor, insira um CEP válido.");
                return;
            }
            estado.value = dados.uf;
            cidade.value = dados.localidade;
            bairro.value = dados.bairro;
            rua.value = dados.logradouro;
            ibge.value = dados.ibge;

            console.log(dados);
           
        });
    console.log(valorCep);
});