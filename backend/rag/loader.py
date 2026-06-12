from langchain_community.document_loaders import TextLoader

def load_documents():

    loader = TextLoader(
        "knowledge_base/company_faq.txt"
    )

    return loader.load()