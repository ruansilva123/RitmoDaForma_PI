from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi.exceptions import HTTPException
from fastapi import status

from app.models import users
from app.schemas import users as users_schema
from app.utils.hash import generate_hash


def create_user(user : users_schema.UserCreate, db : Session):
    db_user = users.User(
        username = user.username, 
        password = generate_hash(user.password),
        is_manager = user.is_manager
    )

    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)

    except IntegrityError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='User already exists!'
        )