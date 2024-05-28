import { getMessages } from "./api";
import DOM_ELEMENTS from "./dom_elements";
import { scrollToEnd } from "./main";
import { getCookie } from "typescript-cookie";

type Message = {
  user: {
    name: string;
    email: string;
  };
  text: string;
  createdAt: string;
};

export function renderSingleMessage(
  addMessageToTheBottom = true,
  message: Message
) {
  const templateRoot = document.createElement("div") as HTMLDivElement;
  templateRoot.classList.add("message");
  if (message.user.email === getCookie("email")) {
    templateRoot.classList.add("message-out");
  } else {
    templateRoot.classList.add("message-in");
  }
  const templateContent = DOM_ELEMENTS.message?.content.cloneNode(
    true
  ) as HTMLElement;
  templateRoot.append(templateContent);
  const pElement = templateRoot.querySelector("p") as HTMLParagraphElement;
  pElement.textContent = `${message.user.name}: ${message.text}`;
  // TODO: пофиксить отображение времени в локальном таймзоне
  const spanElement = templateRoot.querySelector("span") as HTMLSpanElement;
  spanElement.textContent = message.createdAt.split("T")[1].split(".")[0];

  if (addMessageToTheBottom === true) {
    DOM_ELEMENTS.messages?.append(templateRoot);
  } else {
    DOM_ELEMENTS.messages?.prepend(templateRoot);
  }
}

let totalMessagesRendered = 0;

let endOfMessages = false;

export async function render() {
  let messages = await getMessages();
  // messages = messages.reverse();

  if (endOfMessages) {
    return;
  }

  if (totalMessagesRendered === 300) {
    console.log("Все загружено!");
    const endMesseges = document.createElement("div");
    endMesseges.classList.add("messages__end");
    endMesseges.textContent = "Вся история загружена";
    DOM_ELEMENTS.messages?.prepend(endMesseges);
    endOfMessages = true;
    return;
  }

  let messages20 = messages.slice(
    totalMessagesRendered,
    totalMessagesRendered + 20
  );
  totalMessagesRendered += 20;
  // messages20.forEach(renderSingleMessage(false, messages20));
  messages20.map((elem: Message) => renderSingleMessage(false, elem));
}
