from pydantic import BaseModel


class VideoBase(BaseModel):
    title_video : str
    link_video : str
    description_video : str


class VideoCreate(VideoBase):
    pass


class Video(VideoBase):
    id_video : int 

    class Config: 
        from_attributes = True