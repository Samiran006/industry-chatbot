import { useState } from "react";
import { ingestWebsite } from "../services/websiteApi";

function WebsiteInput() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!url.trim()) return;

    try {
      setStatus("Indexing website...");

      const result = await ingestWebsite(url);

      setStatus(result.message);

      setUrl("");
    } catch (error) {
      setStatus("Failed to index website");
      console.error(error);
    }
  };

  return (
    <div className="website-box">
      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Website
      </button>

      {status && (
        <p>{status}</p>
      )}
    </div>
  );
}

export default WebsiteInput;