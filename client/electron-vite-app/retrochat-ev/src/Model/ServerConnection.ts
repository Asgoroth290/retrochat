import { Message } from "./Message";

export interface ServerConnection {
  receiver: 
  setReceiver(receiver: ServerListener): void;
  
}

export interface ServerListener {
  receiveMessage(message: Message): void;
}