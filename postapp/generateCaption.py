import streamlit as st

def generateCaption(client):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an assistant who helps come up with fun trendy Instagram post captions."},
            {"role": "user", "content": "I baked a cake with some berries on top because it's my dog's birthday."},
            {"role": "assistant", "content": "Baking love and joy for my fur baby's celebration! 🍰"},
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    st.write(response)