import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;