from sqlalchemy import Column, String, Integer
from app.core.database import Base


class Video(Base):
    __tablename__ = "videos"

    id_video = Column(Integer, primary_key=True)
    title_video = Column(String(45))
    link_video = Column(String(200))
    description_video = Column(String(100))