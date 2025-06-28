from bs4 import BeautifulSoup
from googletrans import Translator

translator = Translator()

input_file = "Ta/index.html"
output_file = "index_tamil.html"

with open(input_file, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

for tag in soup.find_all(string=True):
    text = tag.strip()
    if text:
        try:
            translated = translator.translate(text, dest='ta').text
            tag.replace_with(translated)
        except Exception as e:
            print("Error translating:", text, "|", e)

with open(output_file, "w", encoding="utf-8") as f:
    f.write(str(soup))
