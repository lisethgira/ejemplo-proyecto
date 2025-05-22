// script.js

// Mostrar alerta al enviar formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = form.querySelector("#nombre").value;
        alert(`Gracias, ${nombre}, hemos recibido tu mensaje.`);
        form.reset();
      });
    }
  
    // Botones de "Ver más" en la página de inventario
    const botones = document.querySelectorAll(".carro button");
    botones.forEach((boton) => {
      boton.addEventListener("click", function () {
        const nombreCarro = boton.closest(".carro").querySelector("h3").textContent;
        alert(`Has seleccionado más información sobre el ${nombreCarro}`);
      });
    });
  });

  function myFunction() {
  document.getElementById("demo").innerHTML = "f.";
}
  