from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from utils import song_reccommender


app = FastAPI()

@app.put("/song_recc")
async def songrecc_endpoint(input:str):
    songs = song_reccommender(input)
    return songs