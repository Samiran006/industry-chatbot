export default function MessageBubble({ message, sender }) {
  const isUser = sender === "user";

  let answer = message;
  let sources = [];

  if (!isUser && message.includes("Sources:")) {
    const parts = message.split("Sources:");

    answer = parts[0].trim();

    sources = parts[1]
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  const getSourceIcon = (source) => {
    if (
      source.startsWith("http://") ||
      source.startsWith("https://")
    ) {
      return "🌐";
    }

    return "📄";
  };

  const cleanSourceName = (source) => {
    return source.split(/[\\/]/).pop();
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(answer);
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className="text-xs font-semibold text-blue-600 mb-2">
            🤖 Industry AI
          </div>
        )}

        <div className="leading-relaxed">
          {answer}
        </div>

        {!isUser && sources.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {sources.map((source, index) => (
              <span
                key={index}
                className="
                  text-xs
                  bg-gray-100
                  border
                  border-gray-300
                  px-2
                  py-1
                  rounded-full
                "
              >
                {getSourceIcon(source)}{" "}
                {cleanSourceName(source)}
              </span>
            ))}
          </div>
        )}

        {!isUser && (
          <div className="mt-4">
            <button
              onClick={copyToClipboard}
              className="
                text-sm
                bg-gray-100
                hover:bg-gray-200
                border
                border-gray-300
                px-3
                py-1
                rounded-lg
                transition
              "
            >
              📋 Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
}