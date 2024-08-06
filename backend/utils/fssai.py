import http.client
import json

# Signzy api
# https://docs.signzy.com/api-marketplace/fssai

conn = http.client.HTTPSConnection("api-preproduction.signzy.app")

headers = {
    'Authorization': '',
    'Content-Type': 'application/json'
}


def fssai_certifited(number):
    payload = json.dumps({
        "licenseNumber": str(number),
        "getCategorizedProductList": "true"
    })
    conn.request("POST", "/api/v3/fssai/verification", payload, headers)
    res = conn.getresponse()
    data = res.read().decode("utf-8")
    if (data['result']['status'] == 'ACTIVE'):
        return True
    else:
        return False
