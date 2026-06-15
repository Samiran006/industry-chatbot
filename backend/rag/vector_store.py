import os

from langchain_community.vectorstores import FAISS


def build_vector_store(chunks, embeddings):

    if os.path.exists("vector_store"):

        db = FAISS.load_local(
            "vector_store",
            embeddings,
            allow_dangerous_deserialization=True
        )

        db.add_documents(chunks)

    else:

        db = FAISS.from_documents(
            chunks,
            embeddings
        )

    db.save_local("vector_store")

    return db