import requests, json
from pprint import pprint

def get_landing_page_headers (url: str) -> dict:
	""" Get initial headers """
	resp = requests.get(url)
	return resp.headers

def post_json_communicate(url: str, headers:dict):
	who = [ "princess", "fountain" ]
	url = f"{url}/dropped"
	data = { 
		"imgDrop": "",
		"who": "",
		"reqType": "json"
	}

	post_headers = {
		"Host": "glamtarielsfountain.com",

		"Content-Length": 52,
		"Sec-Ch-Ua": 'Not?A_Brand";v="8", "Chromium";v="108", "Microsoft Edge";v="108"',
		"Accept": "application/json",
		"Content-Type": "application/json",
		"X-Grinchum": input("Ticket: "), 
		"Sec-Ch-Ua-Mobile": "?0",
		"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54",
		"Sec-Ch-Ua-Platform": "Linux",
		"Origin": "https://glamtarielsfountain.com",
		"Sec-Fetch-Site": "same-origin",
		"Sec-Fetch-Mode": "cors",
		"Sec-Fetch-Dest": "empty",
		"Referer": "https://glamtarielsfountain.com/",
		"Accept-Encoding": "gzip, deflate",
		"Accept-Language": "nb,no;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6,da;q=0.5",
		"Connection": "close"	
	}

	pprint(post_headers)

	for i in range (1,5):
		for persona in who:
			data["imgDrop"] = f"img{i}"
			data["who"] = persona

			resp = requests.post(url, data=json.dumps(data), headers=headers)
			print(f"To: {persona} Image: {i}")
			print("TEXT:")
			pprint(resp.text)

			break
		break


def run():
	print("Fountain Crack by Roger C.B. Johnsen")
	url = "https://glamtarielsfountain.com/"

	headers = get_landing_page_headers(url)
	com_headers = post_json_communicate(url, headers)

if __name__ == "__main__":
	run()