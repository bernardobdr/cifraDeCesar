var escolha = document.querySelector('escolhaComoDecifrar')
var formCesar = document.querySelector("formCesar")
var formBase = document.querySelector("formBase64")

metodo.addEventListener("change", function () {
  if (metodo.value == 0) {
    formCesar.style.display = "none"
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