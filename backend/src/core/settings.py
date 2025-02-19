from decouple import config
from supabase import Client, create_client


""" SUPABASE VARIABLES CONNECTION """

SUPABASE_URL = config("SUPABASE_URL")
SUPABASE_KEY = config("SUPABASE_KEY")


""" SUPABASE JWT CONNECTIONS """

SUPABASE_JWT_SECRET = config("SUPABASE_JWT_SECRET")
VERIFY_ACCESS_TOKEN = config("VERIFY_ACCESS_TOKEN")


""" SUPABASE CONNECTION """

SUPABASE : Client = create_client(SUPABASE_URL, SUPABASE_KEY)


""" IMAGES FOLDER """

IMAGES_FOLDER = '.\\images'