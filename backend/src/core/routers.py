from fastapi import APIRouter

from apps.login.views import router as login_router
from apps.videos.views import router as videos_router


core_routers = APIRouter()


core_routers.include_router(login_router, prefix='/auth', tags=['login'])
core_routers.include_router(videos_router, prefix='/videos', tags=['videos'])