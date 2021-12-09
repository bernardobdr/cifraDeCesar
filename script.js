var metodo = document.getElementById('escolhaComoDecifrar')
var formCesar = document.getElementById("formCesar");
var formBase = document.getElementById("formBase");

metodo.addEventListener("change", function () {
  if (metodo.value == 0) {
    formCesar.style.display = "none";
    formBase.style.display = "none";
  } else if (metodo.value == 1) {
    formCesar.style.display = "flex";
    formBase.style.display = "none";
  } else if (metodo.value == 2) {
    formBase.style.display = "flex";
    formCesar.style.display = "none";
  }
});