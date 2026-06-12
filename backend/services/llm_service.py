import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq

from backend.rag.retriever import get_retriever

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.3
)

retriever = get_retriever()

def ask_llm(question):

    docs = retriever.invoke(question)

    context = "\n".join(
        [doc.page_content for doc in docs]
    )

    prompt = f"""
Answer the question using only the context below.

Context:
{context}

Question:
{question}
"""

    response = llm.invoke(prompt)

    return response.content