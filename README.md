# Industry AI Chatbot

An AI-powered Retrieval-Augmented Generation (RAG) chatbot built using FastAPI, React, LangChain, FAISS, and Groq.

The chatbot can answer questions from uploaded documents and indexed websites using semantic search and large language models.

---

## Features

### AI & RAG

* Retrieval-Augmented Generation (RAG)
* LangChain Integration
* Groq LLM Integration
* Semantic Search
* FAISS Vector Database
* Context-Aware Question Answering

### Knowledge Sources

* Document Upload and Indexing
* PDF Support
* DOCX Support
* TXT Support
* CSV Support
* JSON Support
* Website Knowledge Ingestion

### Chat Features

* Persistent Chat History
* Streaming Responses
* Session Management
* Export Chat
* Prompt Suggestions
* Auto Scroll

### User Experience

* Modern React Interface
* Drag & Drop File Upload
* Toast Notifications
* Responsive Layout
* Clean Sidebar Navigation

---

## Screenshots

### Main Interface

![Main Interface](docs/screenshots/home.png)

### Document Upload

![Document Upload](docs/screenshots/upload.png)

### Website Ingestion

![Website Ingestion](docs/screenshots/website.png)

### Chat Conversation

![Chat Conversation](docs/screenshots/chat.png)

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Toastify
* React Dropzone
* React Icons

### Backend

* FastAPI
* LangChain
* FAISS
* Groq
* BeautifulSoup
* PyPDF
* Python

---

## Project Structure

```text
industry-chatbot/

├── backend/
│   ├── api/
│   ├── rag/
│   ├── services/
│   └── main.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── docs/
│   └── screenshots/
│
├── vector_store/
│
├── .env.example
├── .gitignore
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd industry-chatbot
```

### 2. Backend Setup

Create virtual environment:

```bash
python -m venv venv
```

Activate environment:

Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn backend.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key
```

Example configuration:

```text
.env.example
```

---

## API Endpoints

### Chat

```http
GET /chat
```

### Upload Documents

```http
POST /upload
```

### Website Ingestion

```http
POST /ingest-website
```

### Memory

```http
GET /memory
```

---

## How It Works

1. Upload documents or ingest websites.
2. Content is processed and embedded.
3. Embeddings are stored in FAISS.
4. User asks a question.
5. Relevant context is retrieved.
6. Groq LLM generates an answer using retrieved context.
7. Response is displayed in the chat interface.

---

## Future Improvements

* User Authentication
* Multi-user Support
* Cloud Vector Database
* Docker Support
* Conversation Analytics
* Admin Dashboard
* Source Citations
* Real-Time Streaming

---

## Author

**Samiran Bangal**



---

## License

This project is intended for educational, learning, and portfolio purposes.

