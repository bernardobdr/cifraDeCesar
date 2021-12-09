var escolha = document.querySelector('#escolhaComoDecifrar')
var formCesar = document.querySelector('#formCifraCesar')
var formBase = document.querySelector('#formBase64')

metodo.addEventListener('change', function () {
  if (metodo.value == 0) {
    formCesar.style.display = 'none'
    formBase.style.display = "none"
  } else if (metodo.value == 1) {
    formCesar.style.display = "flex"
    formBase.style.display = "none"
  } else if (metodo.value == 2) {
    formBase.style.display = "flex"
    formCesar.style.display = "none"
  }
});

var radioCifraDeCesar = document.querySelectorAll(".radio")
var radioBase64 = document.querySelectorAll(".radio2")
var btnCodDecod = document.getElementById("codDec")
var btnCodDecod2 = document.getElementById("codDec2")

radioCesar[0].addEventListener('click', function () {
  if (radioCesar[0].checked) {
    btnCodDecod.innerHTML = 'Mensagem codificada:'
  }
});

radioCesar[1].addEventListener('click', function () {
  if (radioCesar[1].checked) {
    btnCodDecod.innerHTML = 'Mensagem decodificado:'
  }
})

radioBase[0].addEventListener('click', function () {
  if (radioBase[0].checked) {
    btnCodDecod2.innerHTML = 'Resultado codificado:'
  }
})

radioBase[1].addEventListener('click', function () {
  if (radioBase[1].checked) {
    btnCodDecod2.innerHTML = 'Mensagem decodificado:'
  }
})

var entrada = document.getElementById('entrada')
var saida = document.getElementById('saida')
var chavePasso = document.getElementById('chavePasso')
var valueChave

entrada.addEventListener('keyup', function () {
  if (radioCesar[0].checked) {
    var valueText = entrada.value.split('');
    valueChave = parseInt(chavePasso.value);
    saida.value = codifica(valueText, valueChave);
  } else {
    var valueText = entrada.value.split('');
    valueChave = parseInt(chavePasso.value);
    saida.value = decodifica(valueText, valueChave);
  }
})


function codifica(texto, chavePasso) {
  return (
    texto
      .map((str) => {
        var cripto = str.charCodeAt();
        if (cripto >= 65 && cripto <= 90) {
          return String.fromCharCode(((cripto - 65 + chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(((cripto - 97 + chavePasso) % 26) + 97);
        } else {
          return str;
        }
      })
      .join("")
  )
}