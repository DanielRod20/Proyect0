window.onscroll = function() {
  // Obtenemos el elemento del menú
  var recuadro2 = document.getElementById("recuadro2");

  // Obtenemos la posición vertical del scroll
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // Si la posición del scroll es mayor a 50px, añadimos una clase para cambiar el estilo del menú
  if (scrollPos > 50) {
    recuadro2.classList.add("scrolled");
  } else {
    // Si la posición del scroll es menor o igual a 50px, quitamos la clase para volver al estilo original
    recuadro2.classList.remove("scrolled");
  }
};