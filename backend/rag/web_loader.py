import requests

from bs4 import BeautifulSoup
from langchain_core.documents import Document


def load_website(url):

    response = requests.get(
        url,
        timeout=10
    )

    soup = BeautifulSoup(
        response.text,
        "html.parser"
    )

    for script in soup(
        ["script", "style"]
    ):
        script.extract()

    text = soup.get_text(
        separator="\n",
        strip=True
    )

    return [
        Document(
            page_content=text,
            metadata={"source": url}
        )
    ]