 let lista = document.getElementById('lista');
 let notaInput = document.getElementsByClassName('notaInput');
 let btnNuevaNota = document.getElementById('btnAgregar');

 let agregarNota = () => {
     let nota = quill.container.value;
     let nuevaNota = document.createElement("li");
     let enlace = document.createElement("a");
     let contenido = document.createTextNode(nota);

     if (nota === "") {
         notaInput.setAttribute("placeholder", "Agrega una nota valida");
         notaInput.className = "error";
         return false;
     }

     enlace.appendChild(contenido);
     enlace.setAttribute("href", "#");
     nuevaNota.appendChild(enlace);
     lista.appendChild(nuevaNota);

     notaInput.value = "";

     for (var i = 0; i <= lista.children.length - 1; i++) {
         lista.children[i].addEventListener("click", function () {
             this.parentNode.removeChild(this);
         });
     }
 };

 var comprobarInput = function () {
     notaInput.className = "";
     notaInput.setAttribute("placeholder", "Agrega tu Nota");
 };

 var eleminarNota = function () {
     this.parentNode.removeChild(this);
 };


