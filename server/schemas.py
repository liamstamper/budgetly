# schemas.py
from pydantic import BaseModel

class UserBase(BaseModel):
    username: str

class UserCreate(UserBase):
    email: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class User(UserBase):
    id: int

    class Config:
        orm_mode = True
