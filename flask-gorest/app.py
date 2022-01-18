import os

from flask import Flask, request, send_from_directory, jsonify
from flask.helpers import safe_join

app = Flask(__name__)
static = safe_join(os.path.dirname(__file__), 'static')

users = {}

posts = {}

def add_user(user):
    user_id = len(users)
    user.update("id", user_id)
    users.update(user_id, user)

def add_post(post):
    post_id = len(posts)
    posts.update("id", post_id)
    users.update(post_id, post)

add_user({"name": "admin", "email": "admin@flask-rest.com", "gender": "female", "status": "active"})

def wrap_data(data):
    return {"meta": {}, "data": data}

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

@app.route('/api/hello-world')
def hello():
    return 'Hello, World!'

@app.route('/api/users', methods=["GET"])
def get_users():
    return wrap_data(users)

@app.route('/api/users', methods=["POST"])
def create_user():
    content = request.get_json()
    users.append(content)
    print(content)
    return {}
