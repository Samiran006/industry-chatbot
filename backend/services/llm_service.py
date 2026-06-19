import os
from functools import lru_cache

from dotenv import load_dotenv
from langchain_groq import ChatGroq

from backend.rag.retriever import get_retriever
from backend.memory.chat_memory import add_message, get_history

load_dotenv()

llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile",
    temperature=0.3
)

@lru_cache(maxsize=1)
def get_cached_retriever():
    print("Loading retriever...")
    retriever = get_retriever()
    print("Retriever loaded successfully.")
    return retriever


def ask_llm(question):
    try:
        retriever = get_cached_retriever()
        docs = retriever.invoke(question)
        sources = []

        for doc in docs:
            source = doc.metadata.get("source", "Unknown")
            sources.append(source)

        context = "\n\n".join(doc.page_content for doc in docs)
    except Exception as e:
        print(f"Retriever Error: {e}")
        docs = []
        sources = []
        context = ""

    history = get_history()
    history_text = ""

    for msg in history:
        history_text += f"{msg['role']}: {msg['content']}\n"

    prompt = f"""
You are an intelligent Industry AI assistant.

Rules:

* Use the provided context first.
* Use conversation history when relevant.
* If the answer is not present in the context, clearly say so.
* Do not invent information.
* Keep answers professional and concise.
* Mention relevant details from retrieved sources when available.
* Answer in a helpful customer-support style.

Conversation History:
{history_text}

Context:
{context}

Question:
{question}

Answer:
"""

    response = llm.invoke(prompt)

    add_message("User", question)
    add_message("Assistant", response.content)

    unique_sources = list(set(sources))
    source_count = len(unique_sources)

    if source_count >= 3:
        confidence = "High"
    elif source_count >= 2:
        confidence = "Medium"
    elif source_count == 1:
        confidence = "Low"
    else:
        confidence = "No Sources"

    source_text = "\n".join(unique_sources) if unique_sources else "No sources available"

    final_answer = (
        f"{response.content}\n\n"
        f"Confidence: {confidence}\n\n"
        f"Sources:\n{source_text}"
    )

    return final_answer
