from openai import OpenAI

client = OpenAI(api_key = "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")

def song_reccommender (input):
    completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an expert content creator who is skilled in picking trendy musics suitable for different content."},
            {"role": "user", "content": f"{input}"}
        ]
    )

    return completion.choices[0].message.content