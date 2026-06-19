from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.api.upload import router as upload_router
from backend.api.chat import router
from backend.api.memory import router as memory_router
from backend.api.website import router as website_router

app = FastAPI(
    title="Industry AI Chatbot"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:4173",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#app.include_router(router)
app.include_router(upload_router)
app.include_router(memory_router)
app.include_router(website_router)

@app.get("/")
def home():
    return {
        "message": "Industry AI Chatbot API Running"
    }