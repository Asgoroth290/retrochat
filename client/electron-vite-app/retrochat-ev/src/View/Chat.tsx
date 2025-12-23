// import '../App.css';
import { FC, useCallback, useEffect, useState } from "react";
import { Message } from "../Model/Message";
import { Button, Card, List, Typography } from 'antd';
import useWebSocket, { ReadyState } from "react-use-websocket";
import { User } from "../Model/User";
import { Header } from "antd/es/layout/layout";

type ChatProps =  {
  serverUrl: string;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PAGE_SIZE = 20;
const messageToSend = new Message(
  new User("Test User","testuser","im the test user","she/her"),
  "hewwo"
)
export const Chat: FC<ChatProps> = (props: ChatProps) => {
  const {serverUrl} = props;

  const [messages, setMessages] = useState(new Array<Message>(0));


  console.log("Starting up");
  const {sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(serverUrl);
  const clickSendMessage = useCallback((message: Message) => sendJsonMessage(message), []);
  
  useEffect(() => {
    if(lastJsonMessage !== null) {
      setMessages((prev) => structuredClone(prev).concat([lastJsonMessage as Message]));
    }
  }, [lastJsonMessage])
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated'
  }[readyState]
  return(
  <>
    <Card 
      title={"Status: " + connectionStatus}>
      <Button
        type='primary'
        onClick={() => clickSendMessage(messageToSend)}
      >Send message to echoserver!</Button>
      <List 
        dataSource={messages}
        renderItem={(message) => (
          <List.Item>
            <Typography.Text mark>
              {message.sender.display_name}: 
            </Typography.Text>
            {message.content}
          </List.Item>
        )}
    />
    </Card>
  </>)
}