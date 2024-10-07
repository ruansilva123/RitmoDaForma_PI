from sqlalchemy import Column, Integer, String, Boolean
from app.core.database import Base


class User(Base):
    __tablename__ = "users"

    id_user = Column(Integer, primary_key=True)
    username = Column(String(100), unique=True)
    password = Column(String)
    is_manager = Column(Boolean, default=False)