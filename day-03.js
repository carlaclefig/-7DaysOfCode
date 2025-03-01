let option = +prompt(
  "¿Quieres seguir el camino de Front-End(1) o Back-End(2)?. Escoge una opción entre 1 y 2:"
);

let language = "";
if (option == 1) {
  language = prompt("¿Quieres aprender React o Vue?");
} else if (option == 2) {
  language = prompt("¿Quieres aprender C# o Java?");
} else {
  alert("¡No ingresaste un área válida!");
}
