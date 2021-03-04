import flask
import json
from flask import jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

@app.route('/api/countries', methods=['GET'])
def home():
    with open('interview.json') as json_file:
        data = json.load(json_file)
    return jsonify(data)

app.run();