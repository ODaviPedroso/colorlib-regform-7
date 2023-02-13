let documento = document.getElementById("documento")
let cep = document.getElementById("cep")
let logradoro = document.getElementById("logradouro")
let numeroCasa = document.getElementById("documento")
let complemento = document.getElementById("complemento")
let numerodomedidor = document.getElementById("numerodomedidor")
let codConsumidor;


//buscar  id pelo cpf

function getConsumidor() {
  fetch(`https://localhost:7230/Consumidor/Documento/${documento.value}`)

    .then(response => response.json())
    .then(data => {
      var apiData = JSON.stringify(data);
      codConsumidor = data.cod_Consumidor
      console.log(apiData)
    })
    .catch(error => console.error(error));
};

function postUser() {
  setTimeout(getConsumidor(), 0)
    fetch(`https://localhost:7230/UC`, {
    method: 'POST',
    headers: {
      "Accept": "*//*",
      "content-type": "application/json",

    },
    body: JSON.stringify({
      cod_Consumidor: codConsumidor,
      num_medidor: numerodomedidor.value,
      num_casa: numeroCasa.value,
      cep: cep.value,
      logradouro: logradoro.value,
      Bairro: bairro.value,
      complemento: complemento.value
    })
  })
  //request.then(re=>console.log(re))
  .then(function (response) {
    if (response.status == 200) {
      alert("Consumidor inserido");

    }
  })
}


var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //getConsumidor()
  postUser();
  // aqui você pode colocar o código que deseja executar ao enviar o formulário


});