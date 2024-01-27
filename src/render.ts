import { getMessages } from "./api";
import DOM_ELEMENTS from "./dom_elements";
import { scrollToEnd } from "./main";

type Message = {
  user: {
    name: string;
    email: string;
  };
  text: string;
  createdAt: string;
};

export function renderSingleMessage(message: Message) {
  const templateRoot = document.createElement("div") as HTMLDivElement;
  templateRoot.classList.add("message", "message-in");
  const templateContent = DOM_ELEMENTS.message?.content.cloneNode(
    true
  ) as HTMLElement;
  templateRoot.append(templateContent);
  const pElement = templateRoot.querySelector("p") as HTMLParagraphElement;
  pElement.textContent = `${message.user.name}: ${message.text}`;
  const spanElement = templateRoot.querySelector("span") as HTMLSpanElement;
  spanElement.textContent = message.createdAt.split("T")[1].split(".")[0];
  DOM_ELEMENTS.messages?.append(templateRoot);
}

export async function render() {
  let messages = await getMessages();
  messages.forEach(renderSingleMessage);
  scrollToEnd();
}
