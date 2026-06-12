from backend.rag.universal_loader import load_all_documents
from backend.rag.chunker import split_documents
from backend.rag.embeddings import get_embeddings
from backend.rag.vector_store import build_vector_store

docs = load_all_documents()

chunks = split_documents(docs)

embeddings = get_embeddings()

build_vector_store(
    chunks,
    embeddings
)

print("Vector Store Created Successfully")