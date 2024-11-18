from fastapi import APIRouter, UploadFile, File, status, Form, Depends
from fastapi.responses import JSONResponse
from typing import Annotated
import os

from .schemas import VideoSchema, VideoSearchSchema
from apps.login.crud import validate_access_token
from core.settings import SUPABASE, IMAGES_FOLDER


router = APIRouter()


@router.post('/', status_code = status.HTTP_201_CREATED)
async def create_video(
    title : Annotated[str, Form()], 
    link : Annotated[str, Form(...)], 
    image : Annotated[UploadFile, File()],
    description : Annotated[str, Form()] = None,
    authorization : str = Depends(validate_access_token)
):
    try:
        image_router = f"{IMAGES_FOLDER}\\{image.filename}"

        with open(image_router, 'wb') as wf:
            wf.write(image.file.read())

        SUPABASE.table('videos').insert({
            'title_video' : title,
            'link_video' : link,
            'description_video' : description,
            'name_image_video' : image.filename
        }).execute()

        with open(image_router, 'rb') as f:
            SUPABASE.storage.from_("videos_image").upload(
                file = f,
                path = image.filename,
                file_options={"cache-control": "3600", "upsert": "false"},
            )

        os.remove(image_router)

        return JSONResponse(
            content = {'message' : 'Successfuly to register video!'}
        )
    
    except:
        return JSONResponse(
            content = {'error' : 'Error to register video!'},
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        )

  
@router.get('/')
async def get_videos(authorization : str = Depends(validate_access_token)):

    try:
        list_videos = []

        videos = SUPABASE.table('videos').select('*').execute()
        
        for video in videos.data:
            public_url = SUPABASE.storage.from_('videos_image').get_public_url(video['name_image_video'])
            
            video = VideoSearchSchema(
                tite = video['title_video'],
                link = video['link_video'],
                description = video['description_video'],
                link_image = public_url
            )

            list_videos.append(dict(video))

        return JSONResponse(
            content = {'message' : list_videos}, 
            status_code = status.HTTP_200_OK
        )
    
    except:
        return JSONResponse(
            content = {'error' : 'Error to return vídeos!'},
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        )
    

@router.get('/{title}')
async def get_video(
    title : str, 
    authorization : str = Depends(validate_access_token)
):
    
    try:
        video = SUPABASE.table('videos').select('*').eq('title_video', title).execute()

        if not video.data:
            return JSONResponse(
                content = {'error' : 'Video not found!'}, 
                status_code = status.HTTP_400_BAD_REQUEST
            )
        
        video = video.data[0]

        public_url = SUPABASE.storage.from_('videos_image').get_public_url(video['name_image_video'])
            
        video = VideoSearchSchema(
            tite = video['title_video'],
            link = video['link_video'],
            description = video['description_video'],
            link_image = public_url
        )

        return dict(video)
    
    except:
        return JSONResponse(
            content = {'error' : 'Error to found video!'}, 
            status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        )