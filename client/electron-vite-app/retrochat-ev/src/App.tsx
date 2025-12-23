import './App.css'
import { Chat } from './View/Chat';
import { useState } from 'react';


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [serverUrl, setServerUrl] = useState('ws://localhost:8000')
  return (
    <>
      <Chat 
         serverUrl={serverUrl}
      />
    </>
  )
}

export default App
