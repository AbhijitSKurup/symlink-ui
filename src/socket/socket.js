import { io } from "socket.io-client";

const URL = "https://4824-103-138-236-18.ngrok-free.app/";

export const socket = io(URL, {
  extraHeaders: { "ngrok-skip-browser-warning": "true" },
});
