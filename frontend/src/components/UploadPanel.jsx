import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";

export default function UploadPanel() {
  const [status, setStatus] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    if (!acceptedFiles || acceptedFiles.length === 0) {
      return;
    }

    const file = acceptedFiles[0];

    const formData = new FormData();
    formData.append("file", file);

    try {
      setStatus("Uploading and indexing...");

      const response = await fetch(
        "http://127.0.0.1:8000/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      toast.success(data.message);

      setStatus(data.message);
    } catch (error) {
      console.error("Upload Error:", error);

      toast.error("Upload failed");

      setStatus("Upload failed");
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          border-2
          border-dashed
          rounded-xl
          p-5
          text-center
          cursor-pointer
          transition-all
          duration-200
          ${
            isDragActive
              ? "border-blue-500 bg-slate-700"
              : "border-slate-600 bg-slate-800 hover:bg-slate-700"
          }
        `}
      >
        <input {...getInputProps()} />

        <div className="text-4xl mb-3">
          📁
        </div>

        <p className="font-semibold text-slate-200">
          Drag & Drop File Here
        </p>

        <p className="text-sm text-slate-400 mt-1">
          or click to browse
        </p>

        <p className="text-xs text-slate-500 mt-2">
          PDF • DOCX • TXT • CSV • JSON
        </p>
      </div>

      {status && (
        <div
          className={`
            mt-3
            text-sm
            px-3
            py-2
            rounded-lg
            ${
              status.toLowerCase().includes("failed")
                ? "bg-red-900 text-red-200"
                : "bg-green-900 text-green-200"
            }
          `}
        >
          {status}
        </div>
      )}
    </div>
  );
}