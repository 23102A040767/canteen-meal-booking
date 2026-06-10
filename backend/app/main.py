from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import engine, get_db
from models import Base, User as UserModel, Meal, Order
from schemas import MealCreate, OrderCreate

Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- USER SCHEMA ----------------

class User(BaseModel):
    username: str
    password: str


# ---------------- REGISTER API ----------------

@app.post("/register")
def register(user: User, db: Session = Depends(get_db)):

    db_user = UserModel(
        username=user.username,
        password=user.password
    )

    db.add(db_user)
    db.commit()

    return {
        "message": "User Registered Successfully"
    }


# ---------------- LOGIN API ----------------

@app.post("/login")
def login(user: User, db: Session = Depends(get_db)):

    print("Username received:", user.username)
    print("Password received:", user.password)

    db_user = db.query(UserModel).filter(
        UserModel.username == user.username,
        UserModel.password == user.password
    ).first()

    print("DB User:", db_user)

    if db_user:
        return {
            "message": "Login Successful"
        }

    return {
        "message": "Invalid Credentials"
    }


# ---------------- ADD MEAL API ----------------

@app.post("/add-meal")
def add_meal(meal: MealCreate, db: Session = Depends(get_db)):

    db_meal = Meal(
        name=meal.name,
        price=meal.price,
        quantity=meal.quantity
    )

    db.add(db_meal)
    db.commit()

    return {
        "message": "Meal Added Successfully"
    }


# ---------------- GET ALL MEALS ----------------

@app.get("/meals")
def get_meals(db: Session = Depends(get_db)):
    return db.query(Meal).all()


# ---------------- PLACE ORDER ----------------

@app.post("/order")
def place_order(order: OrderCreate, db: Session = Depends(get_db)):

    meal = db.query(Meal).filter(
        Meal.id == order.meal_id
    ).first()

    if not meal:
        return {
            "message": "Meal Not Found"
        }

    if meal.quantity < order.quantity:
        return {
            "message": "Not Enough Stock"
        }

    meal.quantity -= order.quantity

    new_order = Order(
        username=order.username,
        meal_id=order.meal_id,
        quantity=order.quantity
    )

    db.add(new_order)
    db.commit()

    return {
        "message": "Order Placed Successfully",
        "remaining_stock": meal.quantity
    }


# ---------------- GET ORDERS ----------------

@app.get("/orders")
def get_orders(db: Session = Depends(get_db)):
    return db.query(Order).all()