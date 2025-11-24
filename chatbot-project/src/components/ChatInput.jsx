import { useState} from 'react';
import { Chatbot } from "supersimpledev";
import WheelSpinGif from "../assets/loading-spinner.gif";
import "./ChatInput.css"; // feature of vite, if we import a css file, it will load it

export function ChatInput({chatMessages, setChatMessages, isLoading, setIsLoading}) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event){
      setInputText(event.target.value); 
  }

  async function sendMessage(event){
      console.log(event.key)

      if ((event.key == "Enter" || event.key == undefined) && isLoading == 0){
          setInputText("");
          setIsLoading(1)
          const newChatMessages = [
          ...chatMessages,
          {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID()
          }];
          setChatMessages(newChatMessages);

          setChatMessages([
              ...newChatMessages, 
              {
                  message: <img src={WheelSpinGif}
                          className="gif-image"></img>,
                  sender: "robot",
                  id: crypto.randomUUID()
              }
          ]);

          const response = await Chatbot.getResponseAsync(inputText)
          setChatMessages([
          ...newChatMessages,
          {
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
          }])
      }
                  
      if (event.key == "Escape"){
          setInputText("")
      }

      setIsLoading(0)
  }

  function clearMessages(){
    setChatMessages([]);
    localStorage.setItem('messages', JSON.stringify([]));
  }
  
  // We cant style fragments with CSS, so we switch it to a div element, which is something that we can style
  return (
      <div className="chat-input-container">
          <input 
              placeholder="Send a message to the Chatbot" 
              size="30" 
              onChange={saveInputText}
              onKeyDown={sendMessage}
              value={inputText}
              className="chat-input"
          />
          <button 
              onClick={sendMessage}
              className="send-button"
          > Send </button>
          <button
            onClick={clearMessages}
            className="clear-button">
            Clear
          </button>
      </div>
  );
  // To style a specific elemenet, we can add a prop called className="", which allows us to style that element in specific
}