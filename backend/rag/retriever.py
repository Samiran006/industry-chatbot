from langchain_community.vectorstores import FAISS

from backend.rag.embeddings import (
    get_embeddings
)


def get_retriever():

    db = FAISS.load_local(
        "vector_store",
        get_embeddings(),
        allow_dangerous_deserialization=True
    )

    retriever = db.as_retriever(
        search_type="similarity",
        search_kwargs={
            "k": 5
        }
    )

    return retriever