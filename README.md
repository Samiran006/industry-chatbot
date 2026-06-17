# Industry AI Chatbot

An AI-powered Retrieval-Augmented Generation (RAG) chatbot built using FastAPI, React, LangChain, FAISS, and Groq.

The chatbot can answer questions from uploaded documents and indexed websites using semantic search and large language models.

## Features

* Document Upload (PDF, DOCX, TXT, CSV, JSON)
* Website Knowledge Ingestion
* Retrieval-Augmented Generation (RAG)
* FAISS Vector Database
* LangChain Integration
* Groq LLM Integration
* Chat History Persistence
* Streaming Responses
* Drag & Drop Upload
* Confidence Scoring
* Export Chat
* Session Management
* Modern React UI

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Toastify
* React Dropzone

### Backend

* FastAPI
* LangChain
* FAISS
* Groq
* BeautifulSoup
* PyPDF
* Python

## Project Structure

industry-chatbot/

├── backend/

├── frontend/

├── vector_store/

├── .env.example

└── README.md

## Installation

### Backend

Create a virtual environment:

python -m venv venv

Activate:

Windows:
venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run backend:

uvicorn backend.main:app --reload

### Frontend

Install dependencies:

npm install

Run frontend:

npm run dev

## Environment Variables

Create a .env file:

GROQ_API_KEY=your_groq_api_key

## API Endpoints

GET /chat

POST /upload

POST /ingest-website

GET /memory

## Future Improvements

* User Authentication
* Multi-user Support
* Cloud Vector Database
* Docker Deployment
* Conversation Analytics

## Author

Samiran Bangal
