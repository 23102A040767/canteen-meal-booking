from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Meal
from schemas import MealCreate

router = APIRouter()

@router.post("/meals")
def add_meal(meal: MealCreate, db: Session = Depends(get_db)):

    db_meal = Meal(
        name=meal.name,
        price=meal.price,
        quantity=meal.quantity
    )

    db.add(db_meal)
    db.commit()

    return {"message": "Meal Added Successfully"}