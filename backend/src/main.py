from fastapi import FastAPI

from src.core.routers import core_routers


app = FastAPI()


app.include_router(core_routers, prefix='/api', tags=['all_urls'])