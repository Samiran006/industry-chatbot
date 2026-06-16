export default function ExportChatButton({ messages }) {

  const exportChat = () => {

    const content = messages
      .map(
        (msg) =>
          `${msg.sender.toUpperCase()}:\n${msg.text}\n`
      )
      .join("\n-----------------\n\n");

    const blob = new Blob(
      [content],
      { type: "text/plain" }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "industry_ai_chat.txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={exportChat}
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        px-4
        py-2
        rounded-lg
        transition
      "
    >
      Export Chat
    </button>
  );
}