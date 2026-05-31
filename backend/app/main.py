from fastapi import FastAPI
from app.database import Base, engine
from app.models import User
from app.routes.users import router as user_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user_router)

@app.get("/")
def home():
    return {
        "message": "Canteen Meal Booking API Running"
    }