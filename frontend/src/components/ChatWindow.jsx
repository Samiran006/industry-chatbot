import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import { sendMessage } from "../services/api";

export default function ChatWindow() {

  const [messages, setMessages] = useState(() => {

  try {

    const saved =
      localStorage.getItem(
        "chat_history"
      );

    return saved
      ? JSON.parse(saved)
      : [];

  } catch {

    return [];

  }

});

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Save chat history
  useEffect(() => {
    localStorage.setItem(
      "chat_history",
      JSON.stringify(messages)
    );
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

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

      const answer = await sendMessage(
        userMessage
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: answer,
        },
      ]);

    } catch (error) {

      console.error(
        "Frontend Error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Error connecting to backend.",
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
    <div className="flex flex-col flex-1 bg-white rounded-xl overflow-hidden shadow">

      <div className="flex-1 overflow-y-auto p-6">

        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <h2 className="text-2xl font-bold mb-2">
              Industry AI Chatbot
            </h2>

            <p>
              Ask anything about your
              documents, website,
              services, pricing,
              support, and more.
            </p>
          </div>
        )}

        {messages.map(
          (msg, index) => (
            <MessageBubble
              key={index}
              message={msg.text}
              sender={msg.sender}
            />
          )
        )}

        {loading && (
          <div className="my-3">
            <div className="inline-block bg-white border border-gray-300 px-4 py-2 rounded-xl shadow-sm text-black">
              🤖 Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />

      </div>

      <div className="border-t border-gray-300 bg-gray-100 p-4">

        <div className="flex gap-2">

          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            onKeyDown={
              handleKeyDown
            }
            placeholder="Ask anything..."
            className="
              flex-1
              border
              border-gray-300
              rounded-lg
              p-3
              outline-none
              bg-white
              text-black
              placeholder-gray-500
            "
          />

          <button
            onClick={handleSend}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-6
              py-3
              rounded-lg
              transition
            "
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}