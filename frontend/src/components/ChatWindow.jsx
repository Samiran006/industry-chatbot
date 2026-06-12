import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { sendMessage } from "../services/api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const answer = await sendMessage(userMessage);

      console.log("Answer:", answer);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: answer,
        },
      ]);
    } catch (error) {
      console.error("Frontend Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Error connecting to backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen flex-1 bg-gray-100">
      
      <div className="flex-1 overflow-y-auto p-6">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <h2 className="text-2xl font-bold mb-2">
              Industry AI Chatbot
            </h2>
            <p>
              Ask anything about your documents, website,
              services, pricing, support, and more.
            </p>
          </div>
        )}

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg.text}
            sender={msg.sender}
          />
        ))}

        {loading && (
          <div className="my-3">
            <div className="inline-block bg-gray-300 px-4 py-2 rounded-xl">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="border-t bg-white p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 border rounded-lg p-3 outline-none"
          />

          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}