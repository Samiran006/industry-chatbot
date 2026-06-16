import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import WebsiteInput from "./components/WebsiteInput";

function App() {

  const [chatKey, setChatKey] = useState(0);

  const clearChat = () => {

    localStorage.removeItem(
      "chat_history"
    );

    setChatKey((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen">

      <Sidebar
        clearChat={clearChat}
      />

      <div className="flex flex-col flex-1 p-4 gap-4">

        <WebsiteInput />

        <ChatWindow
          key={chatKey}
        />

      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
      />
    </div>
  );
}

export default App;