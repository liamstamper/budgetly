# crud.py
from fastapi import HTTPException
from sqlalchemy.orm import Session
from . import models, schemas, security
from sqlalchemy.exc import SQLAlchemyError


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    try:
        hashed_password = security.hash_password(user.password)
        db_user = models.User(email=user.email, hashed_password=hashed_password)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except SQLAlchemyError as e:
        db.rollback()
        # Log the error, re-raise, or handle as necessary
        raise HTTPException(status_code=400, detail=str(e))

def update_user(db: Session, user_id: int, user_update: schemas.UserCreate):
    db_user = get_user(db, user_id)
    if db_user:
        db_user.username = user_update.username
        db_user.hashed_password = security.hash_password(user_update.password)
        db.commit()
        db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = get_user(db, user_id)
    if db_user:
        db.delete(db_user)
        db.commit()
    return db_user
