from fastapi import FastAPI


from app.core.database import engine, Base
from app.models import users, videos, gym_plans, company_contacts, classes


Base.metadata.create_all(bind=engine)


app = FastAPI()


# insert routers here