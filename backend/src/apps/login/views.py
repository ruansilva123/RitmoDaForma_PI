from fastapi import APIRouter, status, Depends
from fastapi.responses import JSONResponse

from .schemas import LoginSchema
from core.settings import SUPABASE
from apps.login.crud import validate_access_token


router = APIRouter()


@router.post('/login/')
async def login(data : LoginSchema):
    
    try:
        response = SUPABASE.auth.sign_in_with_password(
            credentials = {"email" : data.email, "password" : data.password}
        )

        return JSONResponse(
            content = {
                "access_token" : response.session.access_token, 
                "refresh_token" : response.session.refresh_token, 
                "expires_in" : response.session.expires_in
            }
        )

    except:
        return JSONResponse(content={'error' : 'Invalid credentials!'}, status_code=status.HTTP_401_UNAUTHORIZED)
    

@router.post('/token/refresh/')
async def refresh_token(refresh_token : str):

    try:
        response = SUPABASE.auth.refresh_session(refresh_token = refresh_token)

        return JSONResponse(
            content = {
                "access_token" : response.session.access_token, 
                "refresh_token" : response.session.refresh_token, 
                "expires_in" : response.session.expires_in
            }
        )

    except:
        return JSONResponse(content={'error' : 'Invalid token!'}, status_code=status.HTTP_401_UNAUTHORIZED)
    

@router.post('/token/verify/')
async def verify_access_token(response : str = Depends(validate_access_token)):
    
    try:
        return JSONResponse(content={'message' : 'Valid token!'}, status_code=status.HTTP_200_OK)
    
    except:
        return JSONResponse(content={'error' : 'Error to validate token!'}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)