import { FaRobot } from "react-icons/fa";
import UploadPanel from "./UploadPanel";

export default function Sidebar({
  clearChat,
}) {

  const messageCount = JSON.parse(
    localStorage.getItem("chat_history") || "[]"
  ).length;

  return (
    <div className="w-72 bg-slate-900 text-white p-4 flex flex-col border-r border-slate-700">

      <div className="flex items-center gap-3 text-2xl font-bold">
        <FaRobot className="text-blue-400" />
        <span>Industry AI</span>
      </div>

      <p className="text-slate-400 text-sm mt-2">
        AI-powered RAG chatbot with document and website knowledge.
      </p>

      <hr className="my-4 border-slate-700" />

      <button
        onClick={clearChat}
        className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          transition
          p-3
          rounded-lg
          font-medium
        "
      >
        + New Chat
      </button>

      <div className="mt-6">

        <h3 className="text-sm font-semibold text-slate-300 mb-2">
          Upload Knowledge
        </h3>

        <UploadPanel />

      </div>

      <div className="mt-6">

        <h3 className="text-sm font-semibold text-slate-300 mb-2">
          Conversation Stats
        </h3>

        <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-400">
          {messageCount} messages
        </div>

      </div>

      <div className="mt-auto pt-6 text-xs text-slate-500">
        Phase 11.4 • Session Management
      </div>

    </div>
  );
}