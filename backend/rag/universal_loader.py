import os
import json
import pandas as pd

from langchain_core.documents import Document

from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
    Docx2txtLoader
)


def load_all_documents():

    documents = []

    folders = {
        "pdfs": "knowledge_base/pdfs",
        "txt": "knowledge_base/txt",
        "docx": "knowledge_base/docx",
        "jsons": "knowledge_base/jsons",
        "csvs": "knowledge_base/csvs"
    }

    # ==========================
    # PDF FILES
    # ==========================

    for file in os.listdir(folders["pdfs"]):

        if file.endswith(".pdf"):

            loader = PyPDFLoader(
                os.path.join(
                    folders["pdfs"],
                    file
                )
            )

            docs = loader.load()

            for doc in docs:
                doc.metadata["source"] = file

            documents.extend(docs)

    # ==========================
    # TXT FILES
    # ==========================

    for file in os.listdir(folders["txt"]):

        if file.endswith(".txt"):

            loader = TextLoader(
                os.path.join(
                    folders["txt"],
                    file
                )
            )

            docs = loader.load()

            for doc in docs:
                doc.metadata["source"] = file

            documents.extend(docs)

    # ==========================
    # DOCX FILES
    # ==========================

    for file in os.listdir(folders["docx"]):

        if file.endswith(".docx"):

            loader = Docx2txtLoader(
                os.path.join(
                    folders["docx"],
                    file
                )
            )

            docs = loader.load()

            for doc in docs:
                doc.metadata["source"] = file

            documents.extend(docs)

    # ==========================
    # JSON FILES
    # ==========================

    for file in os.listdir(folders["jsons"]):

        if file.endswith(".json"):

            with open(
                os.path.join(
                    folders["jsons"],
                    file
                ),
                "r",
                encoding="utf-8"
            ) as f:

                data = json.load(f)

                documents.append(
                    Document(
                        page_content=json.dumps(
                            data,
                            indent=2
                        ),
                        metadata={
                            "source": file
                        }
                    )
                )

    # ==========================
    # CSV FILES
    # ==========================

    for file in os.listdir(folders["csvs"]):

        if file.endswith(".csv"):

            df = pd.read_csv(
                os.path.join(
                    folders["csvs"],
                    file
                )
            )

            documents.append(
                Document(
                    page_content=df.to_string(),
                    metadata={
                        "source": file
                    }
                )
            )

    print("\n========== DOCUMENTS LOADED ==========")

    for doc in documents:
        print(doc.metadata)

    print("======================================\n")

    return documents