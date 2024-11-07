from fastapi import APIRouter

from apps.login.views import router as login_router


core_routers = APIRouter()


core_routers.include_router(login_router, prefix='/auth', tags=['login'])