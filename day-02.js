function language() {
  let languageCollection = document.getElementsByClassName(
    "form__input--language"
  );
  let language = languageCollection[0].value.trim();
  return language;
}

function generateText() {
  let nameCollection = document.getElementsByClassName("form__input--name");
  let name = nameCollection[0].value;

  let yearsCollection = document.getElementsByClassName("form__input--years");
  let years = yearsCollection[0].value;

  let resultCollection = document.getElementsByClassName("form__result");
  let result = resultCollection[0];

  result.innerHTML = `Hola ${name}, tienes ${years} años y ya estás aprendiendo ${language()}!`;
}

function cleanBox() {
  let inputNameCollection = document.getElementsByClassName("form__input");
  inputNameCollection[0].value = "";
  inputNameCollection[1].value = "";
  inputNameCollection[2].value = "";
}

function showOption() {
  let content = document.getElementById("content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }

  let question = document.querySelector(".form__optional-question");
  question.innerHTML = `¿Te gusta estudiar ${language()}?`;

  let yes = document.querySelector(".form__optional-input[value='yes']");
  let no = document.querySelector(".form__optional-input[value='no']");

  let optional = document.querySelector(".form__optional-result");

  yes.addEventListener("change", () => {
    if (yes.checked) {
      optional.innerHTML = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
      cleanBox();
    }
  });

  no.addEventListener("change", () => {
    if (no.checked) {
      optional.innerHTML =
        "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
      cleanBox();
    }
  });
}
