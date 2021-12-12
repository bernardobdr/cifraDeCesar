var escolha = window.document.querySelector('escolha');
var formCesar = window.document.querySelector('formCesar');
var formBase64 = window.document.querySelector('formBase64');

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

var radioCesar = window.document.querySelectorAll('.radio');
var radioBase = window.document.querySelectorAll(''.radio2');
var btnCodDecod = window.document.querySelector('#codDec');
var btnCodDecod2 = window.document.querySelector('#codDec2');

radioCesar[0].addEventListener('click', function () {
  if (radioCesar[0].checked) {
    btnCodDecod.innerHTML = "Mensagem codificado:";
  }
});

radioCesar[1].addEventListener('click', function () {
  if (radioCesar[1].checked) {
    btnCodDecod.innerHTML = "Mensagem decodificada:";
  }
});

radioBase[0].addEventListener('click', function () {
  if (radioBase[0].checked) {
    btnCodDecod2.innerHTML = 'Mensagem codificada:';
  }
});

radioBase[1].addEventListener('click', function () {
  if (radioBase[1].checked) {
    btnCodDecod2.innerHTML = 'Mensagem decodificada:';
  }
});

// Criptografia Cifra de César

var entrada = window.document.querySelector('entrada');
var saida = window.document.getElementById('saida');
var chavePasso = window.document.getElementById("chavePasso");
var valueChave;

entrada.addEventListener("keyup", function () {
  if (radioCesar[0].checked) {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = codificar(valueText, valueChave);
  } else {
    var valueText = entrada.value.split("");
    valueChave = parseInt(chavePasso.value);
    saida.value = decodificar(valueText, valueChave);
  }
});

function codificar(texto, chavePasso) {
  return (
    texto
      // map é um for que transforma string em array automaticamente
      .map((str) => {
        // famosa arrow function
        var cripto = str.charCodeAt();
        // limitar o ascii a letras do alfabeto maiusculas e minusculas
        if (cripto >= 65 && cripto <= 90) {
          // retornar em string
          return String.fromCharCode(((cripto - 65 + chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(((cripto - 97 + chavePasso) % 26) + 97);
        } else {
          return str;
        }
      })
      // juntar tudo em uma string novamente
      .join("")
  );
}

function decodificar(texto, chavePasso) {
  return (
    texto
      // map é um for que transforma string em array automaticamente
      .map((str) => {
        // famosa arrow function
        var cripto = str.charCodeAt();
        // limitar o ascii a letras do alfabeto maiusculas e minusculas
        if (cripto >= 65 && cripto <= 90) {
          // retornar em string
          return String.fromCharCode(cripto - 65 - chavePasso < 0)
            ? // if e else como operador condicional ternario
              String.fromCharCode(((cripto - 65 - chavePasso + 26) % 26) + 65)
            : String.fromCharCode(((cripto - 65 - chavePasso) % 26) + 65);
        } else if (cripto >= 97 && cripto <= 122) {
          return String.fromCharCode(cripto - 97 - chavePasso < 0)
            ? String.fromCharCode(((cripto - 97 - chavePasso + 26) % 26) + 97)
            : String.fromCharCode(((cripto - 97 - chavePasso) % 26) + 65);
        } else {
          return str;
        }
      })
      // juntar tudo em uma string novamente
      .join("")
  );
}

// Criptografia do Base64
var entradaBase = window.document.getElementById("entrada2");
var saida2 = window.document.getElementById("saida2");
var baseValue;

entradaBase.addEventListener("keyup", function () {
  baseValue = entradaBase.value;
  if (radioBase[0].checked) {
    saida2.value = btoa(baseValue);
  } else if (radioBase[1].checked) {
    saida2.value = atob(baseValue);
  } else {
    return 0;
  }
});
