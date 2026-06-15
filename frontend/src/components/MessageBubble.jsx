export default function MessageBubble({ message, sender }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex my-4 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          px-5
          py-3
          rounded-2xl
          shadow-sm
          whitespace-pre-wrap
          break-words
          ${
            isUser
              ? "bg-blue-600 text-white rounded-br-md"
              : "bg-white text-gray-900 border border-gray-200 rounded-bl-md"
          }
        `}
      >
        {!isUser && (
          <div className="text-xs font-semibold text-blue-700 mb-2">
            🤖 Industry AI
          </div>
        )}

        <div className="leading-relaxed">
          {message}
        </div>
      </div>
    </div>
  );
}