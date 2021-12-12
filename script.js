var escolha = window.document.querySelector('#escolha');
var formCesar = window.document.querySelector('#formCesar');
var formBase64 = window.document.querySelector('#formBase64');

escolha.addEventListener('change', function () {
  if (escolha.value == 0) {
    formCesar.style.display = 'none';
    formBase64.style.display = 'none';
  } else if (escolha.value == 1) {
    formCesar.style.display = 'flex';
    formBase64.style.display = 'none';
  } else if (escolha.value == 2) {
    formBase64.style.display = 'flex';
    formCesar.style.display = 'none';
  }
});

var radioCesar = window.document.querySelectorAll('.radio-1')
var radioBase64 = window.document.querySelectorAll('.radio-2')
var btnCodDecod = window.document.querySelector('#codificarDecodificar-1')
var btnCodDecod2 = window.document.querySelector('#codificarDecodificar-2')

radioCesar[0].addEventListener('click', function () {
  if (radioCesar[0].checked) {
    btnCodDecod.innerHTML = 'Mensagem codificada:'
  }
})

radioCesar[1].addEventListener('click', function () {
  if (radioCesar[1].checked) {
    btnCodDecod.innerHTML = 'Mensagem decodificada:'
  }
})

radioBase64[0].addEventListener('click', function () {
  if (radioBase64[0].checked) {
    btnCodDecod2.innerHTML = 'Mensagem codificada:'
  }
})

radioBase64[1].addEventListener('click', function () {
  if (radioBase64[1].checked) {
    btnCodDecod2.innerHTML = 'Mensagem decodificada:'
  }
})

var entrada = window.document.querySelector('#mensagemEntrada')
var saida = window.document.querySelector('#mensagemSaida')
var chavePasso = window.document.querySelector('#movimentar')
var valueChave;

entrada.addEventListener('keyup', function () {
  if (radioCesar[0].checked) {
    var valueText = entrada.value.split('')
    valueChave = parseInt(chavePasso.value);
    saida.value = codificar(valueText, valueChave)
  } else {
    var valueText = entrada.value.split('')
    valueChave = parseInt(chavePasso.value);
    saida.value = decodificar(valueText, valueChave)
  }
})

function codificar(texto, chavePasso) {
  return (
    texto
      .map((str) => {
        var criptografia = str.charCodeAt();
        if (criptografia >= 65 && criptografia <= 90) {
          return String.fromCharCode(((criptografia - 65 + chavePasso) % 26) + 65);
        } else if (criptografia >= 97 && criptografia <= 122) {
          return String.fromCharCode(((criptografia - 97 + chavePasso) % 26) + 97)
        } else {
          return str
        }
      })
      .join('')
  )
}

function decodificar(texto, chavePasso) {
  return (
    texto
      .map((str) => {
        var criptografia = str.charCodeAt();
        if (criptografia >= 65 && criptografia <= 90) {
          return String.fromCharCode(criptografia - 65 - chavePasso < 0)
            ?
              String.fromCharCode(((criptografia - 65 - chavePasso + 26) % 26) + 65)
            : String.fromCharCode(((criptografia - 65 - chavePasso) % 26) + 65)
        } else if (criptografia >= 97 && criptografia <= 122) {
          return String.fromCharCode(criptografia - 97 - chavePasso < 0)
            ? String.fromCharCode(((criptografia - 97 - chavePasso + 26) % 26) + 97)
            : String.fromCharCode(((criptografia - 97 - chavePasso) % 26) + 65)
        } else {
          return str
        }
      })
      .join('')
  )
}

var entradaBase64 = window.document.querySelector('#mensagemEntrada-2')
var saida2 = window.document.querySelector('#mensagemSaida-2')
var baseValue;

entradaBase64.addEventListener('keyup', function () {
  baseValue = entradaBase64.value
  if (radioBase64[0].checked) {
    saida2.value = btoa(baseValue)
  } else if (radioBase64[1].checked) {
    saida2.value = atob(baseValue)
  } else {
    return 0
  }
})
