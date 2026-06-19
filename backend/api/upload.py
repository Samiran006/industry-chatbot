from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter()


def get_upload_folder(filename):

    extension = filename.split(".")[-1].lower()

    mapping = {
        "pdf": "knowledge_base/pdfs",
        "txt": "knowledge_base/txt",
        "docx": "knowledge_base/docx",
        "json": "knowledge_base/jsons",
        "csv": "knowledge_base/csvs"
    }

    return mapping.get(extension)


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):

    upload_folder = get_upload_folder(
        file.filename
    )

    if upload_folder is None:
        return {
            "message":
            "Unsupported file type"
        }

    os.makedirs(
        upload_folder,
        exist_ok=True
    )

    file_path = os.path.join(
        upload_folder,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
     "message":
     f"{file.filename} uploaded successfully"
   }