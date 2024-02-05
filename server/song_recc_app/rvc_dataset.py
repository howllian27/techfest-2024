import replicate
import os
from dotenv import load_dotenv

load_dotenv()

replicate_key = os.getenv("REPLICATE_API_TOKEN")

print(replicate_key)
# Run the RVC dataset creation job
dataset = replicate.run(
    "zsxkib/create-rvc-dataset:c445e27ff34574e92781c15c67db41835cedcdc27a19f527a7dcf37bd0ffe1ff",
    input={
        "youtube_url": "https://www.youtube.com/watch?v=4b6bwcWK6GE"
    }
)
print(dataset)

output = replicate.run(
    "replicate/train-rvc-model:0397d5e28c9b54665e1e5d29d5cf4f722a7b89ec20e9dbf31487235305b1a101",
    input={
        "dataset_zip": dataset
    }
)
print(output)