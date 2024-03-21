import { io } from "socket.io-client";

const URL = "http://:4000";

export const socket = io(URL);