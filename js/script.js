function actualizarFecha() {
  const elementoFecha = document.getElementById("fecha");
  const ahora = new Date();

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  elementoFecha.textContent = ahora.toLocaleString("es-CL", opciones);
}

actualizarFecha();

setInterval(actualizarFecha, 1000);

const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre-completo").value.trim();
  const email = document.getElementById("email").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !email || !comentario) {
    alert("Por favor, completa todos los campos.");
    mensaje.style.display = "none";
  } else {
    mensaje.style.display = "block";
    formulario.reset();
  }
});
