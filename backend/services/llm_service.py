import os

from dotenv import load_dotenv
from langchain_groq import ChatGroq

from backend.rag.retriever import get_retriever
from backend.memory.chat_memory import (
    add_message,
    get_history
)

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.3
)



def ask_llm(question):
    retriever = get_retriever()
    docs = retriever.invoke(question)

    sources = []

    for doc in docs:
        source = doc.metadata.get(
            "source",
            "Unknown"
        )
        sources.append(source)

    context = ""

    for doc in docs:
        context += (
            doc.page_content +
            "\n\n"
        )

    history = get_history()

    history_text = ""

    for msg in history:
        history_text += (
            f"{msg['role']}: "
            f"{msg['content']}\n"
        )

    prompt = f"""
You are an intelligent customer support assistant.

Use:
1. Conversation history
2. Retrieved context

Conversation History:
{history_text}

Context:
{context}

Question:
{question}

Answer naturally and accurately.
"""

    response = llm.invoke(prompt)

    add_message("User", question)

    add_message(
        "Assistant",
        response.content
    )

    unique_sources = list(
        set(sources)
    )

    source_text = "\n".join(
        unique_sources
    )

    final_answer = (
        f"{response.content}\n\n"
        f"Sources:\n{source_text}"
    )

    return final_answer