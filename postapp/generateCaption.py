import streamlit as st

def generateCaption(client, prompt):
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a instagram post caption expert who helps come up with 3 fun trendy Instagram post captions that is only 1 phrase with adequate emojis."},
            {"role": "user", "content": prompt}
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    st.write(response.choices[0].message.content)