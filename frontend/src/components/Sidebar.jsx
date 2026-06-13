import { FaRobot } from "react-icons/fa";
import UploadPanel from "./UploadPanel";

export default function Sidebar() {
  return (
    <div className="w-72 bg-gray-900 text-white p-4">

      <div className="flex items-center gap-2 text-xl font-bold">
        <FaRobot />
        Industry AI
      </div>

      <hr className="my-4" />

      <button className="w-full bg-blue-600 p-2 rounded-lg">
        New Chat
      </button>

      <UploadPanel />

    </div>
  );
}