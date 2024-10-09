from pydantic import BaseModel


class UserBase(BaseModel):
    username : str
    password : str
    is_manager : bool = False


class UserCreate(UserBase):
    pass


class User(UserBase):
    id_user : int 

    class Config: 
        from_attributes = True