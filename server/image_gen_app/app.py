from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.images.generate(
  model="dall-e-3",
  prompt="headphones in dark room in the shape of a skull",
  size="1024x1024",
  quality="standard",
  n=1,
)
print(response)
image_url = response.data[0].url
print(image_url)