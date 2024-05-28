import { getCookie } from "typescript-cookie";
import { renderSingleMessage } from "./render";
import { scrollToEnd } from "./main";
import DOM_ELEMENTS from "./dom_elements";

export let socket: WebSocket;
function newSocket() {
  socket = new WebSocket(
    `wss://edu.strada.one/websockets?${getCookie("code")}`
  );
  socket.onmessage = function (event) {
    renderSingleMessage(true, JSON.parse(event.data));
    scrollToEnd();
    socket.close();
  };

  socket.onopen = function () {
    console.log("opened");
    console.log(socket);
  };

  socket.onclose = function () {
    console.log("closed");
    socket = new WebSocket(
      `wss://edu.strada.one/websockets?${getCookie("code")}`
    );
    newSocket();
  };
}

export function sendSocket() {
  console.log(socket);
  socket.send(JSON.stringify({ text: DOM_ELEMENTS.inputText?.value }));
}

newSocket();

// socket.onopen = function () {
//   socket.send(
//     JSON.stringify({
//       text: "тестовый тест",
//     })
//   );
// };
