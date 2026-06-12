from fastapi import APIRouter

from backend.rag.web_loader import load_website
from backend.rag.chunker import split_documents
from backend.rag.embeddings import get_embeddings
from backend.rag.vector_store import build_vector_store

router = APIRouter()


@router.post("/ingest-website")
def ingest_website(url: str):

    docs = load_website(url)

    chunks = split_documents(docs)

    embeddings = get_embeddings()

    build_vector_store(
        chunks,
        embeddings
    )

    return {
        "message": "Website indexed successfully",
        "url": url
    }