import streamlit as st
import openai

# configure page
def configure_streamlit():
    # # File uploader in the sidebar on the left
    with st.sidebar:
        openai.api_key = st.text_input("Login Key", type="password")
    if not openai.api_key:
        st.info("Please add your Login Key to continue.")
        st.stop()
    
    return openai.api_key

def takeInput():
    # Title
    st.title('Make me an Image')

    # configure the app
    api_key = configure_streamlit()

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