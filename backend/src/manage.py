import typer


app = typer.Typer()


@app.command()
def runserver(host : str = "0.0.0.0"):
    import uvicorn
    import os

    port = os.getenv("PORT", 8000)

    uvicorn.run("app.main:app", log_level="info", host=host, port=int(port), reload=True)
    # Remove reload true when back-end is deployed


@app.command()
def flush():
    from app.core.database import engine, Base
    from app.models import users, videos, gym_plans, company_contacts, classes
    
    try: 
        Base.metadata.drop_all(bind=engine)
        Base.metadata.create_all(bind=engine)

        print(f"\nDatabase cleaned with success!\n")
    except Exception as e: 
        print(f"\nError to clean database: {e}\n")


@app.command()
def createmanageruser(username : str, password : str):
    from app.apps.users.crud import create_user
    from app.schemas.users import UserCreate
    from app.utils.database_conn import connect_db
    from sqlalchemy.orm import Session
    from app.utils.validations import validate_new_password

    from app.core.database import engine, Base
    from app.models import users, videos, gym_plans, company_contacts, classes
    
    Base.metadata.create_all(bind=engine)

    try:
        db : Session = connect_db()
        
        if not validate_new_password(password):
            raise Exception("\nThe password must have: \n \
    - Between 8 and 12 characters; \n \
    - Special characters -> !@#$%&*(){|}; \n \
    - Number; \n \
    - Uppercase and lowercase letters. ")

        user = UserCreate(username = username, password = password, is_manager = True)
        create_user(user, db)

        print("\nManager user created with success!\n")
    except Exception as e:
        print(f"\nError to create manager user: {e}\n")
    finally:
        db.close()


if __name__ == "__main__":
    app()