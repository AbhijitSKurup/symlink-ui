import { io } from 'socket.io-client';

const URL ='https://fb20-103-181-238-106.ngrok-free.app/';

export const socket = io(URL);

