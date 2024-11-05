from app.core.database import DatabaseSession
from sqlalchemy.orm import Session


def get_connect_db():
    db = DatabaseSession()
    try:
        yield db
    finally:
        db.close()

    
def connect_db() -> Session:
    return DatabaseSession()