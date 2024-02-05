from openai import OpenAI
from generateImage import generateImage
from input import takeInput


model_choice, prompt, api_key = takeInput()
# Configure the client
client = OpenAI(api_key=api_key)
# generate image and display it
generateImage(client=client, model_choice=model_choice, prompt=prompt)