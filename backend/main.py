from fastapi import FastAPI
from backend.api.chat import router
from backend.api.website import router as website_router
app = FastAPI(
    title="Industry Chatbot"
)

app.include_router(router)
app.include_router(website_router)
@app.get("/")
def root():
    return {
        "status": "running",
        "message": "Industry Chatbot Backend Started"
    }