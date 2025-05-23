import { FC, useState } from "react";
import { Message } from "../Model/Message";
import { List } from 'antd';
import { ServerConnection, ServerListener } from "../Model/ServerConnection";

type ChatProps =  {
  connection: ServerConnection;
}


const PAGE_SIZE = 20;
export const Chat: FC<ChatProps> = (props: ChatProps) => {
  const { connection } = props;
  const listener: ServerListener = {
    
  }
  connection.setReceiver(this);
  const [messages, setMessage] = useState(new Array<Message>(PAGE_SIZE));
  return(
  <>
    <List 
      dataSource={messages}
    />
  </>)
}