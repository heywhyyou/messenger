const inputText = document.getElementById("message__input");
const form = document.querySelector(".form");
const message = document.getElementById("message");
const messages = document.querySelector(".messages");

function buttonClickHandler(e) {
  e.preventDefault();
  const templateRoot = document.createElement("div");
  templateRoot.classList.add("message", "message-out", "message-sent");
  const templateContent = message.content.cloneNode(true);
  templateRoot.append(templateContent);
  const pElement = templateRoot.querySelector("p");
  pElement.textContent = `Я: ${inputText.value}`;
  messages.append(templateRoot);
  console.log(inputText.value);
}

form.addEventListener("submit", buttonClickHandler);
