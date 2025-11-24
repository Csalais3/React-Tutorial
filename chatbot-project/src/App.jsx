import { useState } from 'react'; //by Convention, we import from packages, then files, then images, then APP.css
import { ChatInput } from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages.jsx"
import './App.css';

// A best practice is to seperate each component into its own file
// The best practice is to lead external libraries from node_modules instead of using a <script> tag
function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  return (
      <div className="app-container">
        <ChatMessages 
          chatMessages={chatMessages}
        /> 
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    );
}
// The advantage of this code is that we can seperate our code into several different files

export default App
