import DOM_ELEMENTS from "./dom_elements";
import { getCode, changeName } from "./api";
import { setCookie } from "typescript-cookie";
import { render } from "./render";
import { sendSocket } from "./socket";

//TODO: сохранять данные юзера

export function scrollToEnd() {
  if (!DOM_ELEMENTS.messages) {
    return;
  }

  DOM_ELEMENTS.messages.scrollTop = DOM_ELEMENTS.messages.scrollHeight;
}

function buttonClickHandler(event: Event) {
  event.preventDefault();

  if (!DOM_ELEMENTS.inputText) {
    return;
  }

  if (!DOM_ELEMENTS.inputText.value) {
    console.log("Напишите что-нибудь!");
    return;
  }

  sendSocket();

  DOM_ELEMENTS.inputText.value = "";
}

function getCodeHandler(e: Event) {
  e.preventDefault();

  if (DOM_ELEMENTS.inputEmail && DOM_ELEMENTS.inputEmail.value) {
    getCode(DOM_ELEMENTS.inputEmail.value);
    setCookie("email", DOM_ELEMENTS.inputEmail.value);
  } else {
    console.log("Напишите email!");
  }
}

function saveCodeToCookies(code: string) {
  setCookie("code", code);
}

function signInHandler(e: Event) {
  e.preventDefault();

  if (DOM_ELEMENTS.inputCode && DOM_ELEMENTS.inputCode.value) {
    saveCodeToCookies(DOM_ELEMENTS.inputCode.value);
    DOM_ELEMENTS.login?.close();
    DOM_ELEMENTS.settings?.showModal();
    render();
    scrollToEnd();
  } else {
    console.log("Введите код!");
  }
}

function enterCodeHandler(e: Event) {
  e.preventDefault();
  DOM_ELEMENTS.authorization?.close();
  DOM_ELEMENTS.login?.showModal();
}

function changeNameHandler(e: Event) {
  e.preventDefault();

  if (DOM_ELEMENTS.inputName && DOM_ELEMENTS.inputName.value) {
    changeName(DOM_ELEMENTS.inputName.value);
    DOM_ELEMENTS.settings?.close();
    DOM_ELEMENTS.main?.classList.add("container__active");
    scrollToEnd();
  } else {
    console.log("Введите код!");
  }
}

function scrollHandler() {
  if (DOM_ELEMENTS.messages?.scrollTop === 0) {
    render();
  }
}

function darkThemeHandler() {
  DOM_ELEMENTS.main?.classList.add("dark");
}

DOM_ELEMENTS.form?.addEventListener("submit", buttonClickHandler);
DOM_ELEMENTS.buttonReceive?.addEventListener("click", getCodeHandler);
DOM_ELEMENTS.buttonSignIn?.addEventListener("click", signInHandler);
DOM_ELEMENTS.buttonEnterCode?.addEventListener("click", enterCodeHandler);
DOM_ELEMENTS.buttonName?.addEventListener("click", changeNameHandler);
DOM_ELEMENTS.messages?.addEventListener("scroll", scrollHandler);
DOM_ELEMENTS.buttonDarkTheme?.addEventListener("click", darkThemeHandler);
