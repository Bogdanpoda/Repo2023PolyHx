from flask import Flask,jsonify
#import firebase_admin
#from firebase_admin import credentials, db
from scoreCalculations import helloworld
from DatasetManager import parseData 


app = Flask(__name__)


# Initialize Firestore DB
#cred = credentials.Certificate('key.json')
#firebase_admin.initialize_app(cred, {
 #   "databaseURL": "https://polyhack-d4607-default-rtdb.firebaseio.com/"
#})


@app.route("/test")
def test():
    helloworld()

    return {"Test": "test"}

@app.route("/job/<filter>", methods=["GET"])
def get_job(filter):
    if filter =="software":
        job = {
            "id": "123",
            "title": "Software Engineer",
            "description": "Develop software solutions to meet customer requirements.",
            "location": "San Francisco, CA",
            "salary": 120000
        }
        return jsonify(job)
    else:
        job = {
            "id": "345",
            "title": "Bitchass",
            "description": "Develop software solutions to meet customer requirements.",
            "location": "San Francisco, CA",
            "salary": 120000
        }
        return jsonify(job)









if __name__ == "__main__":
    parseData()
    #app.run(debug=True)
    
