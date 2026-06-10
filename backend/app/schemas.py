from pydantic import BaseModel

class UserLogin(BaseModel):
    username: str
    password: str


class MealCreate(BaseModel):
    name: str
    price: int
    quantity: int


class OrderCreate(BaseModel):
    username: str
    meal_id: int
    quantity: int