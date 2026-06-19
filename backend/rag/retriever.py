from langchain_community.vectorstores import FAISS

_db = None


def get_retriever():

    global _db

    if _db is None:

        from backend.rag.embeddings import (
            get_embeddings
        )

        print("Loading FAISS index...")

        _db = FAISS.load_local(
            "vector_store",
            get_embeddings(),
            allow_dangerous_deserialization=True
        )

        print("FAISS loaded.")

    return _db.as_retriever(
        search_type="similarity",
        search_kwargs={
            "k": 5
        }
    )