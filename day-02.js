function generateText() {
  let nameCollection = document.getElementsByClassName("form__input--name");
  let name = nameCollection[0].value;

  let yearsCollection = document.getElementsByClassName("form__input--years");
  let years = yearsCollection[0].value;

  let languageCollection = document.getElementsByClassName(
    "form__input--language"
  );
  let language = languageCollection[0].value;

  let resultCollection = document.getElementsByClassName("form__result");
  let result = resultCollection[0];

  result.innerHTML = `Hola ${name}, tienes ${years} años y ya estás aprendiendo ${language}!`;
}
