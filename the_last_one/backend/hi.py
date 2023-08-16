import sys
import requests 
from bs4 import BeautifulSoup
import json
def main():
    one = requests.get(sys.argv[1])
    soup = BeautifulSoup(one.content,"html.parser")
    item =soup.find(id='player')
    items = item.find_all('source')
    video_url = []
    for item in items:
        dic_temp = {item['size']:item['src'] }
        video_url.append(dic_temp)
    return json.dumps(video_url)
print(main())

