var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/turttle2.jpeg') {
      miImage.setAttribute('src','images/felipe3.jpeg');
    } else {
      miImage.setAttribute('src', 'images/turttle2.jpeg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Bienvenido a este sitio!, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido a este sitio!, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}