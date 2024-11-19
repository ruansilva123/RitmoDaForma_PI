from pydantic import BaseModel


class VideoSchema(BaseModel):

    title : str
    link : str 
    description : str = None


class VideoSearchSchema(BaseModel):

    tite : str
    link : str
    description : str = None
    link_image : str