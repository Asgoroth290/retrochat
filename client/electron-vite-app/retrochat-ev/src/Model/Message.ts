import { Messenger } from "./User";

export class Message {
  sender: Messenger;
  content: string;

  constructor(sender: Messenger, content: string) {
    this.sender = sender;
    this.content = content;
  }
}