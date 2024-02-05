from openai import OpenAI
import os

client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))

def song_reccommender (input):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an expert content creator who is skilled in picking trendy musics (No need for any elaboration) suitable for different content and designed to output in json. Provide me with the title, artist, youtube link and spotify link of the song"},
            {"role": "user", "content": f"{input}"}
        ]
    )

    return completion.choices[0].message.content