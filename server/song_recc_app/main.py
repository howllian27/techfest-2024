from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import song_reccommender
import replicate
from rvc_dataset import create_rvc


app = FastAPI()

# Define a list of allowed origins for CORS
origins = [
    "http://localhost:3000",  # Allow your React frontend
    # "https://yourproductiondomain.com" # You can add more origins as needed
]

# Add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Or ["*"] to allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Or specify methods ["POST", "GET", etc.]
    allow_headers=["*"],
)
class Item(BaseModel):
    voice_url: str

voice_zip = None

@app.post("/voice/")
async def voice_endpoint(item: Item):
    global voice_zip
    # Assuming create_rvc now returns a path or URL to the created ZIP file
    voice_zip = create_rvc(item.voice_url)
    print(voice_zip)
    return {"voice_zip": voice_zip}

@app.get("/voice_zip")
async def zip_endpoint():
    if voice_zip is None:
        raise HTTPException(status_code=404, detail="Voice ZIP not found")
    return {"voice_zip": voice_zip}



