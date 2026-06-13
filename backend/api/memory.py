from fastapi import APIRouter

from backend.memory.chat_memory import (
    clear_history
)

router = APIRouter()


@router.post("/clear-chat")
def clear_chat():

    clear_history()

    return {
        "message":
        "Chat history cleared"
    }