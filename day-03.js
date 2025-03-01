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

let fullstack = prompt(
  "¿Quieres convertirte en desarollador fullstack? (sí o no)"
);
if (fullstack == "sí" || fullstack == "SI" || fullstack == "si") {
  alert(
    "Tienes que estudiar nuevas tecnologías para complementar tu aprendisaje."
  );
} else {
  alert(`Ponle mucho empeño estudiando el lenguaje de ${language}.`);
}
