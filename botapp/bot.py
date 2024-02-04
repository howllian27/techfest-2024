import streamlit as st
from llama_index import VectorStoreIndex, ServiceContext, Document
from llama_index.llms import OpenAI
import openai
from llama_index import SimpleDirectoryReader

# configure page
st.set_page_config(page_title="Generate Your Own Storyboard Today With Creati.AI, powered by OpenAI and LlamaIndex", page_icon="🦙", layout="centered", initial_sidebar_state="auto", menu_items=None)

# set OpenAI API key
openai.api_key = "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"

# set page title and info
st.title("Chat with Your Story Materials, powered by LlamaIndex 💬📔")
st.info("Go on ", icon="📃")

uploaded_file = st.file_uploader('Upload your Story Material')

if uploaded_file:

# Initialize the chat messages history         
if "messages" not in st.session_state.keys(): 
    st.session_state.messages = [
        {"role": "assistant", "content": "Allow me to assist you with creating your story!"}
    ]

# Load files and index them
@st.cache_resource(show_spinner=False)
def load_data():
    with st.spinner(text="Loading and indexing your story materials 📚 Hang tight! This should take 1-3 minutes."):
        reader = SimpleDirectoryReader(input_dir="./data", recursive=True)
        docs = reader.load_data()
        service_context = ServiceContext.from_defaults(llm=OpenAI(model="gpt-3.5-turbo", temperature=0.5, system_prompt="You are an AI Storyboarding Assistant with expertise in narrative development, plot structure, and creative storytelling specifically for content creation in social media. Your job is to help users generate and refine storyboards for their creative projects. Provide detailed, context-aware suggestions for plot points, character development, and visual elements. Your responses should be imaginative yet coherent, helping to bring users' visions to life."))
        index = VectorStoreIndex.from_documents(docs, service_context=service_context)
        return index


index = load_data()

if "chat_engine" not in st.session_state.keys(): # Initialize the chat engine
        st.session_state.chat_engine = index.as_chat_engine(chat_mode="condense_question", verbose=True)

if prompt := st.chat_input("Your question"): # Prompt for user input and save to chat history
    st.session_state.messages.append({"role": "user", "content": prompt})

for message in st.session_state.messages: # Display the prior chat messages
    with st.chat_message(message["role"]):
        st.write(message["content"])

# If last message is not from assistant, generate a new response
if st.session_state.messages[-1]["role"] != "assistant":
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            response = st.session_state.chat_engine.chat(prompt)
            st.write(response.response)
            message = {"role": "assistant", "content": response.response}
            st.session_state.messages.append(message) # Add response to message history