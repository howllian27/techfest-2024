import streamlit as st
from llama_index import VectorStoreIndex, ServiceContext, Document
from llama_index.llms import OpenAI
import openai
from llama_index import SimpleDirectoryReader
import os

# configure page
def configure_streamlit():
    st.set_page_config(page_title="Generate Your Own Storyboard Today With Creati.AI, powered by OpenAI and LlamaIndex", 
                       page_icon="📱", layout="centered", initial_sidebar_state="auto")
    # # File uploader in the sidebar on the left
    with st.sidebar:
        openai.api_key = st.text_input("Login Key", type="password")
    if not openai.api_key:
        st.info("Please add your Login Key to continue.")
        st.stop()
    print(openai.api_key)
    st.title("Chat with Your Story Materials, powered by OpenAI & LlamaIndex 💬📔")
    st.info("Go on to explore other features at our website!", icon="📃")

# Initialize the chat messages history
def init_messages():         
    if "messages" not in st.session_state.keys(): 
        st.session_state.messages = [
            {"role": "assistant", "content": "Allow me to assist you with creating your story!"}
        ]

# Function to save uploaded file to a directory
def save_uploaded_file(directory, file):
    if not os.path.exists(directory):  # Check if the directory exists
        os.makedirs(directory)  # Make a new directory because it does not exist 
    with open(os.path.join(directory, file.name), "wb") as f:  # Open the file within the directory
        f.write(file.getbuffer())  # Write the file to the directory
    st.success("Saved file :{} in {}".format(file.name, directory))

# Load files and index them
# @st.cache_resource(show_spinner=True)
def load_data():
    print("LOADING NEW DATAAAA NOWWWWWWW!!!!!!!!")
    with st.spinner(text="Loading and indexing your story materials 📚 Hang tight! This should take 1-3 minutes."):
        print("SPINNING!!!!")
        reader = SimpleDirectoryReader(input_dir="./data", recursive=True)
        docs = reader.load_data()
        service_context = ServiceContext.from_defaults(llm=OpenAI(model="gpt-3.5-turbo", temperature=0.5, system_prompt="You are an AI Storyboarding Assistant with expertise in narrative development, plot structure, and creative storytelling specifically for content creation in social media. Your job is to help users generate and refine storyboards for their creative projects. Provide detailed, context-aware suggestions for plot points, character development, and visual elements. Your responses should be imaginative yet coherent, helping to bring users' visions to life."))
        index = VectorStoreIndex.from_documents(docs, service_context=service_context)
        return index

# Allow user to upload their story materials
def upload_file_and_load_data():
    uploaded_file = st.file_uploader('Upload your Story Material')

    if uploaded_file:
        # Save the file to the data directory
        save_uploaded_file('./data', uploaded_file)
        load_data()
        return load_data()

# Function to handle user input and generate response    
def user_input_and_response():
    if prompt := st.chat_input("Your question"):
        st.session_state.messages.append({"role": "user", "content": prompt})
    display_messages()
    generate_response(prompt)

# Function to display chat messages
def display_messages():
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.write(message["content"])

# Initialize the chat engine
def init_chat_engine(index):
    if "chat_engine" not in st.session_state:
        st.session_state.chat_engine = index.as_chat_engine(chat_mode="condense_question", verbose=True)

# Generate response
def generate_response(prompt):
    if st.session_state.messages[-1]["role"] != "assistant":
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                response = st.session_state.chat_engine.chat(prompt)
                st.write(response.response)
                st.session_state.messages.append({"role": "assistant", "content": response.response})

# Main function
def main():
    configure_streamlit()
    init_messages()
    index = upload_file_and_load_data()
    if index:
        init_chat_engine(index)
    else:
        index = load_data()
        init_chat_engine(index)
    user_input_and_response()

# Run the main function
if __name__ == "__main__":
    main()