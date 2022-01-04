import os

from flask import Flask, send_from_directory
from flask.helpers import safe_join

app = Flask(__name__)
static = safe_join(os.path.dirname(__file__), 'static')


@app.route('/hello-world')
def hello():
    return 'Hello, World!'

@app.route('/')
def _home():
    """Serve index.html at the root url"""
    return send_from_directory(static, 'index.html')

@app.route('/<path:path>')
def _static(path):
    """Serve content from the static directory"""
    if os.path.isdir(safe_join(static, path)):
        path = os.path.join(path, 'index.html')
    return send_from_directory(static, path)