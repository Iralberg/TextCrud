function login(){
  let senha=document.querySelector("#senha").value
  let nome=document.querySelector("#nome").value
  if(nome=="iral" && senha=="senha"){
  nome.value=""
    window.location.href="Pag01/index.html"
  }
  else{
    alert("Erro[ ], senha ou nome incorretos")
  }
  senha.value=""
  nome.focus()
    enhaenha
