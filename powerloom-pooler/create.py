# arr = []

# for i in range(50):
#     arr.append(project_ids[random.randint(0,150)])


# for val in arr:
#     # temp = val[0:len-2]
#     # print(val)
#     # break
#     url = f'https://uniswapv2-api.powerloom.io/data/2660/{val}/'
#     response = requests.get(url)
#     # Print the response
#     response_json = response.json()
#     # res = json.loads(response_json)

#     x = {"contract": response_json["contract"],
#          "job": url}
#     dict.append(x)
#     # print(x)
#     # time.sleep(1)
# print(dict)
import requests
import time
import json
import data
import io
from lighthouseweb3 import Lighthouse
from dotenv import load_dotenv
import os
import math
dict = {}

def day0():
    global dict
    closeEpocUrl = 'https://uniswapv2-api.powerloom.io/current_epoch' 
    closeEpoc = int(json.loads(requests.get(closeEpocUrl).text)["epochId"])
    for coin in data.data:
      openEpoc = 1
      for epoc in range(openEpoc, closeEpoc - 240, 240):
        openUrl = f'https://uniswapv2-api.powerloom.io/data/{epoc + 24}/{coin["job"]}' 
        closeUrl = f'https://uniswapv2-api.powerloom.io/data/{epoc}/{coin["job"]}'
        openResponse = json.loads(requests.get(openUrl).text)
        openPrice = openResponse['token0Prices'][list(openResponse['token0Prices'].keys())[0]]
        closeResponse = json.loads(requests.get(closeUrl).text)
        closePrice = closeResponse['token0Prices'][list(closeResponse['token0Prices'].keys())[0]]
        try:
          dict[coin['contract']].append([openPrice, closePrice])
        except:
          dict[coin['contract']] = [[openPrice, closePrice]]
    return dict
        
def daily():
    global dict
    closeEpocUrl = 'https://uniswapv2-api.powerloom.io/current_epoch' 
    closeEpoc = int(json.loads(requests.get(closeEpocUrl).text)["epochId"])
    for coin in data.data:
      openEpoc = max(closeEpoc - 720, 1)
      openUrl = f'https://uniswapv2-api.powerloom.io/data/{openEpoc}/{coin["job"]}' 
      closeUrl = f'https://uniswapv2-api.powerloom.io/data/{closeEpoc}/{coin["job"]}'
      openResponse = json.loads(requests.get(openUrl).text)
      openPrice = openResponse['token0Prices'][list(openResponse['token0Prices'].keys())[0]]
      closeResponse = json.loads(requests.get(closeUrl).text)
      closePrice = closeResponse['token0Prices'][list(closeResponse['token0Prices'].keys())[0]]
      try:
        dict[coin['contract']].append([openPrice, closePrice])
      except:
        dict[coin['contract']] = [[openPrice, closePrice]]
    return dict

load_dotenv()
response = requests.get("https://gateway.lighthouse.storage/ipns/k51qzi5uqu5dm1uuht9e59h4qrvqs9pjx8a3cf1sz7x7j0vyyolywu8v3abls8")
dict = json.loads(response.text)
dailyData = day0()
lh = Lighthouse(token=os.getenv("LHKey"))
result = json.dumps(dailyData)
write_file = open("trial.txt", "w")
write_file.write(result)
write_file.close()
tag = "powerloomData"
upload = lh.upload(source = "trial.txt", tag=tag)
list_uploads = lh.download(upload['data']['Hash'])

print(upload['data']['Hash'])
response = requests.get("https://api.lighthouse.storage/api/ipns/publish_record?cid="+upload['data']['Hash']+"&keyName=ce2cd41551564889a3fab52b125190b3", headers={"Authorization": "Bearer 6b691914.6940cf296607421aa60945184a348ff7"})
