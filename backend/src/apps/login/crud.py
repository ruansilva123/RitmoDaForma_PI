from fastapi import HTTPException, Depends, status
from fastapi.security import OAuth2PasswordBearer
import requests

from src.core.settings import SUPABASE_KEY, VERIFY_ACCESS_TOKEN


oauth2_scheme = OAuth2PasswordBearer(tokenUrl='/api/auth/login/')


def validate_access_token(token : str = Depends(oauth2_scheme)):

    headers = {"Authorization" : f"Bearer {token}", "apikey" : SUPABASE_KEY}

    response = requests.get(url = VERIFY_ACCESS_TOKEN, headers = headers)
    
    if response.status_code != 200:
        raise HTTPException(
            detail = 'Invalid or expired access token!',
            status_code = status.HTTP_401_UNAUTHORIZED
        )

    return response.status_code