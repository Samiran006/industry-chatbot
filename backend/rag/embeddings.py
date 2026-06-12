from langchain_huggingface import HuggingFaceEmbeddings

def get_embeddings():

    embeddings = HuggingFaceEmbeddings(
        model_name="sentence-transformers/paraphrase-multilingual-mpnet-base-v2"
    )

    return embeddings