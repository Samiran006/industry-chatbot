from backend.rag.loader import load_documents
from backend.rag.chunker import split_documents
from backend.rag.embeddings import get_embeddings
from backend.rag.vector_store import build_vector_store

docs = load_documents()

chunks = split_documents(docs)

embeddings = get_embeddings()

build_vector_store(
    chunks,
    embeddings
)

print("Vector Store Created Successfully")