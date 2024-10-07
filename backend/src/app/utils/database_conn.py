from app.core.database import DatabaseSession


def connect_db():
    db = DatabaseSession()
    try:
        yield db
    finally:
        db.close()