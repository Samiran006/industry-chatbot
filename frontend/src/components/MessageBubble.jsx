export default function MessageBubble({ message, sender }) {
  return (
    <div
      className={`my-3 flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-xl px-4 py-3 ${
          sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {message}
      </div>
    </div>
  );
}