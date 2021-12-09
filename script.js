var selecao = document.querySelector('#selecao')
var telaDeCesar = document.querySelector('#divCifraDeCesar')
var telaDaBase64 = document.querySelector('#divBase64')

selecao.addEventListener('change', function(){
  if(selecao.value == 'base64'){
    telaDaBase64.style.display = 'block'
    telaDeCesar.style.display = 'none'
  }else{
    telaDeCesar.style.display = 'block'
    telaDaBase64.style.display = 'none'
  }
})