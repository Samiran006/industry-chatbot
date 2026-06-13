import { useState } from "react";

export default function UploadPanel() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "http://127.0.0.1:8000/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="mt-4">
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        onClick={uploadFile}
        className="w-full bg-green-600 p-2 mt-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}