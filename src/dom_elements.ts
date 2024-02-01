type DOM_ELEMENTS = {
  inputText: HTMLTextAreaElement | null;
  form: HTMLFormElement | null;
  message: HTMLTemplateElement | null;
  messages: HTMLDivElement | null;
  buttonReceive: HTMLButtonElement | null;
  inputEmail: HTMLInputElement | null;
  buttonSignIn: HTMLButtonElement | null;
  inputCode: HTMLInputElement | null;
  login: HTMLDialogElement | null;
  authorization: HTMLDialogElement | null;
  settings: HTMLDialogElement | null;
  buttonEnterCode: HTMLButtonElement | null;
  buttonName: HTMLButtonElement | null;
  inputName: HTMLInputElement | null;
  buttonSubmit: HTMLButtonElement | null;
};

const DOM_ELEMENTS: DOM_ELEMENTS = {
  inputText: document.querySelector("#message__input"),
  form: document.querySelector(".form"),
  message: document.querySelector("#message"),
  messages: document.querySelector(".messages__wrapper"),
  buttonReceive: document.querySelector(".button__receive"),
  inputEmail: document.querySelector(".input__email"),
  buttonSignIn: document.querySelector(".button__signin"),
  inputCode: document.querySelector(".input__code"),
  login: document.querySelector("#login"),
  authorization: document.querySelector("#authorization"),
  settings: document.querySelector("#settings"),
  buttonEnterCode: document.querySelector(".button__enter_code"),
  buttonName: document.querySelector(".button__name"),
  inputName: document.querySelector(".input__name"),
  buttonSubmit: document.querySelector("#button__submit"),
};

export default DOM_ELEMENTS;
