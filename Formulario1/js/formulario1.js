baseGeneros=[];
/*
function capturaDatos(){
    var generoCapturado= document.getElementById("generos").value;
    baseGeneros.push(generoCapturado);
    

    document.getElementById("tablaDatos").innerHTML += '<tbody><td style="font-size: 24px">'+ generoCapturado +'</td><td><div class="col"><a href="#" class="btn btn-danger fs-5" onclick="eliminarGenero()"> Eliminar </a></div></td></tbody>'

    console.log(generoCapturado);
}

function eliminarGenero(){
  //  let posicion= baseGeneros.indexOf()
    var tamañoBD= baseGeneros.length;
    
    console.log();
}
*/

function eliminarGenero(index) {
    baseGeneros.splice(index, 1);
    mostrarGeneros();
  }
   function mostrarGeneros() {
    var tabla = document.getElementById("tablaDatos");
    tabla.innerHTML = '<thead><tr><th style="font-size: 30px;">Listado de Géneros</th></tr></thead>';
     for (var i = 0; i < baseGeneros.length; i++) {
      var fila = document.createElement("tr");
      var genero = document.createElement("td");
      genero.style.fontSize = "24px";
      genero.textContent = baseGeneros[i];
      var eliminar = document.createElement("td");
      var eliminarBtn = document.createElement("div");
      eliminarBtn.classList.add("col");
      var eliminarLink = document.createElement("a");
      eliminarLink.href = "#";
      eliminarLink.classList.add("btn", "btn-danger", "fs-5");
      eliminarLink.textContent = "Eliminar";
      eliminarLink.setAttribute("onclick", "eliminarGenero(" + i + ")");
      eliminarBtn.appendChild(eliminarLink);
      eliminar.appendChild(eliminarBtn);
      fila.appendChild(genero);
      fila.appendChild(eliminar);
      tabla.appendChild(fila);
    }
  }
   function capturaDatos() {
    var generoCapturado = document.getElementById("generos").value;
    baseGeneros.push(generoCapturado);
    mostrarGeneros();
    console.log(generoCapturado);
  }