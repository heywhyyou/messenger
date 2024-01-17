const inputText = document.getElementById(
  "message__input"
) as HTMLTextAreaElement;
const form = document.querySelector(".form") as HTMLFormElement;
const message = document.getElementById("message") as HTMLTemplateElement;
const messages = document.querySelector(".messages") as HTMLDivElement;

function buttonClickHandler(e: Event) {
  e.preventDefault();
  const templateRoot = document.createElement("div") as HTMLDivElement;
  templateRoot.classList.add("message", "message-out", "message-sent");
  const templateContent = message.content.cloneNode(true);
  templateRoot.append(templateContent);
  const pElement = templateRoot.querySelector("p") as HTMLParagraphElement;
  pElement.textContent = `Я: ${inputText.value}`;
  messages.append(templateRoot);
}

form.addEventListener("submit", buttonClickHandler);
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buttonClickHandler(event);
  }
});
