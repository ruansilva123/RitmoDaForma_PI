from app.models import users
from app.schemas import users as users_schema
from sqlalchemy.orm import Session
from app.utils.hash import generate_hash


def create_user(user : users_schema.UserCreate, db : Session):
    user.password = generate_hash(user.password)
    db_user = users.User(
        username = user.username, 
        password = user.password, 
        is_manager = user.is_manager
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user