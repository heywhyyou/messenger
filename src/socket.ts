import { getCookie } from "typescript-cookie";

export const socket = new WebSocket(
  `wss://edu.strada.one/websockets?${getCookie("code")}`
);

socket.onmessage = function (event) {
  console.log(event.data);
};

socket.onopen = function () {
  console.log("opened");
};

socket.onclose = function () {
  console.log("closed");
};

// socket.onopen = function () {
//   socket.send(
//     JSON.stringify({
//       text: "тестовый тест",
//     })
//   );
// };
