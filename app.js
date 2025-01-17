// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function mostrarAmigos() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (!nombre) {
    alert("Por favor, ingrese un nombre válido");
    return;
  }
  amigos.push(nombre);
  mostrarAmigos();
  // ...actualizar la lista en la página...
  input.value = "";
}

function sortearAmigo() {
  if (!amigos.length) {
    alert("No hay nombres para sortear.");
    return;
  }
  const ganador = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerHTML = ganador;
  // ...mostrar 'ganador' en la página...
}

function sortearTodos() {
  if (amigos.length < 2) {
    alert("Se necesitan al menos 2 amigos para sortear.");
    return;
  }
  const copia = [...amigos];
  // ...barajar copia...
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  const asignaciones = [];
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === copia[i] && i === amigos.length - 1) {
      // Intercambio para evitar asignación a sí mismo
      [copia[i], copia[i - 1]] = [copia[i - 1], copia[i]];
    }
    asignaciones.push(`${amigos[i]} → ${copia[i]}`);
  }
  // ...mostrar resultados en la página...
}
