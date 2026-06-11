from fastapi import APIRouter
from backend.services.llm_service import ask_llm

router = APIRouter()

@router.get("/chat")
def chat(query: str):

    answer = ask_llm(query)

    return {
        "query": query,
        "answer": answer
    }