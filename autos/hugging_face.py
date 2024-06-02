# from langchain_community.llms import HuggingFaceHub
from langchain_core.prompts import PromptTemplate
from langchain_community.llms import HuggingFaceEndpoint



template = "<s>[INST]You are json data maker. Your primary task to recieve that </s>{question} and make response with json data[/INST]"
prompt_template = PromptTemplate.from_template(template)
formatted_prompt_template = prompt_template.format(question = "shirt, pant and shoes")

repo_id = "mistralai/Mistral-7B-Instruct-v0.2"
llm = HuggingFaceEndpoint(
    repo_id=repo_id, huggingfacehub_api_token="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"
)
res = llm.invoke(formatted_prompt_template)
print(res)