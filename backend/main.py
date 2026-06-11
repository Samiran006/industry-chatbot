from fastapi import FastAPI
from backend.api.chat import router

app = FastAPI(
    title="Industry Chatbot"
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "status": "running",
        "message": "Industry Chatbot Backend Started"
    }