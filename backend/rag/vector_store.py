from langchain_community.vectorstores import FAISS

def build_vector_store(chunks, embeddings):

    db = FAISS.from_documents(
        chunks,
        embeddings
    )

    db.save_local("vector_store")

    return db