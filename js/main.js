// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function orcamento(){

  nome = document.getElementById('pnome').value;
  email = document.getElementById('mail').value;
  descricao = document.getElementById('descricao').value;

  if(nome == "" || email == "" || descricao == ""){

    Swal.fire({
        title: Atenção,
        text: "Por favor preencha os campos",
        timer: 3500
      
      }
    )
    
  } else{
    alert("Pedido de Orçamento enviado com sucesso")
    
  }
}


function alerta(){
  Swal.fire({
    title: Atenção,
    text: "Por favor preencha os campos",
    timer: 3500
  
  }
)
}

function novidades(){
  
  let novidades = document.getElementById('novidades');
  let tudo = document.getElementById('tudo');

  if(novidades != ""){
    document.getElementById("div-3").style.display = "none";
    document.getElementById("div-4").style.display = "none";
    document.getElementById("div-5").style.display = "none";
    document.getElementById("div-6").style.display = "none";
}

}


function mostrarTodos() {
  document.getElementById("div-3").style.display="block";
  document.getElementById("div-4").style.display="block";
  document.getElementById("div-5").style.display="block";
  document.getElementById("div-6").style.display="block";
}

function picture(){
  let pic = document.getElementById('files').value;
  //let pictures = document.getElementById('picture');

  if(pic != ""){
    document.getElementById('picture').src = pic;
  }
}

function preferenciaContacto(){
  let email = document.getElementById('email-pref');
  let telemovel = document.getElementById('telemovel-pref');

  if(email != "" || telemovel != ""){
    document.getElementById('email-pref').style.backgroundColor = "blue";
    document.getElementById('telemovel-pref').style.backgroundColor = "blue";
  }
}