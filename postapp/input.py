import streamlit as st

def takeInput():
    # Title
    st.title('Make me an Image')
    # Ask for the API key
    api_key = st.text_input("Enter your OpenAI API key:", type="password")

    # Ask for the model choice
    model_choice = st.selectbox(
        "Which Dall E model would you like to use? ",
        ("DALL·E 3", "DALL·E 2"),
        index=None,
        key="model_choice",
        placeholder="Select DALL·E model",
    )
    # Display user choice
    st.write('You selected:', model_choice)

    # Logic if no model is selected
    if model_choice == "DALL·E 3":
        model_choice = "dall-e-3"
    else:
        model_choice = "dall-e-2"

    # Takes the user prompt

    prompt = st.text_input("Enter a prompt:", key="user_prompt_input")

    return model_choice, prompt, api_key