const inputText: HTMLTextAreaElement | null =
  document.querySelector("#message__input");
const form: HTMLFormElement | null = document.querySelector(".form");
const message: HTMLTemplateElement | null = document.querySelector("#message");
const messages: HTMLDivElement | null =
  document.querySelector(".messages__wrapper");
const buttonReceive: HTMLButtonElement | null =
  document.querySelector(".button__receive");
const inputEmail: HTMLInputElement | null =
  document.querySelector(".input__email");

function scrollToEnd() {
  if (!messages) {
    return;
  }
  messages.scrollTop = messages.scrollHeight;
}

function buttonClickHandler(e: Event) {
  e.preventDefault();

  if (!inputText) {
    return;
  }

  if (!inputText.value) {
    console.log("Напишите что-нибудь!");
    return;
  }

  const templateRoot = document.createElement("div") as HTMLDivElement;
  templateRoot.classList.add("message", "message-out", "message-sent");
  const templateContent = message?.content.cloneNode(true) as HTMLElement;
  templateRoot.append(templateContent);
  const pElement = templateRoot.querySelector("p") as HTMLParagraphElement;
  pElement.textContent = `Я: ${inputText.value}`;
  messages?.append(templateRoot);
  scrollToEnd();
  inputText.value = "";
}

form?.addEventListener("submit", buttonClickHandler);
form?.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    buttonClickHandler(event);
  }
});

async function getCode() {
  if (!inputEmail) {
    return;
  }

  try {
    const response = await fetch("https://edu.strada.one/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail.value,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function getCodeHandler(e: Event) {
  e.preventDefault();
  getCode();
}

buttonReceive?.addEventListener("click", getCodeHandler);
