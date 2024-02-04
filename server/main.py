from fastapi import FastAPI
from utils import song_reccommender


app = FastAPI()

@app.get("/song_recc")
async def songrecc_endpoint(input:str):
    songs = song_reccommender(input)
    return songs

