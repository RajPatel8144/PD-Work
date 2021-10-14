"""
Backend Maintainer : Ram Vyas [31512703 , rv8@njit.edu]
Please Comment All Functions with proper Information
"""
import time
from flask import Flask
import requests
from db import *

app = Flask(__name__)

@app.route('/')
def index_backend():
    return "Flask Backend for GTBM"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api_data')
def get_api():
    response = requests.get("https://api.coincap.io/v2/assets/?limit=5")
    return response.json()