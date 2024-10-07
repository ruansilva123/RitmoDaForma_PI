import typer


app = typer.Typer()


@app.command()
def runserver():
    import uvicorn
    uvicorn.run("app.main:app", log_level="info", reload=True)
    # Remove reload true when back-end is deployed


@app.command()
def flush():
    print('clean database')


@app.command()
def createmanageruser(username : str, password : str):
    from app.apps.users.crud import create_user
    from app.schemas.users import UserCreate
    from app.utils.database_conn import connect_db

    user = UserCreate(username = username, password = password, is_manager = True)
    db = ...

    print('create new user')


if __name__ == "__main__":
    app()