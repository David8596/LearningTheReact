import { Chatbot } from 'supersimpledev';
import { useState } from 'react';
import './ChatInput.css'

export default function ChatInput({ setChatMessages }){
  const [inputText, setInputText] = useState('')

  function saveInputText(event){
    setInputText(event.target.value)
  }

  function sendMessage(){
    const currentInputText = inputText;
    if (inputText === ''){
      return    
    }
    setInputText('');

    setChatMessages(prevChatMessages => [
      ...prevChatMessages,
    {
      message: currentInputText,
      sender: "user",
      id: crypto.randomUUID()
    }])

    const response = Chatbot.getResponse(inputText);
    setChatMessages(prevChatMessages => [
      ...prevChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      }
    ]);
  }
  
  function getKeyFormKeyboard(event){
    if (event.key === 'Enter'){
      sendMessage();
    }
    else if (event.key === 'Escape'){
      setInputText('');
    }
  }

  return (
    <div className='chat-input-container'>
    <input 
      placeholder="Send a message to ChatBot" 
      size="30"
      onChange={saveInputText}
      value={inputText}
      onKeyDown={getKeyFormKeyboard}
      className='chat-input'
      />
    <button
      onClick={sendMessage}
      className='send-button'
    >Send</button>
    </div>
  );
}