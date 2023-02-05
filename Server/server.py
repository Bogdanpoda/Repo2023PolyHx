from flask import Flask, request
import firebase_admin
from firebase_admin import credentials, db


app = Flask(__name__)


# Initialize Firestore DB
cred = credentials.Certificate('key.json')
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://polyhack-d4607-default-rtdb.firebaseio.com/"
})


#Route to get n jobs and return them to the client
@app.route("/jobs", methods = ['GET'])
def returnJobs():
    STACK_LENGTH = 10
    count = request.headers.get('stack_count')
    number_to_send = STACK_LENGTH - count
    #GET the jobs from csv
    jobs = []
    for i in range(len(number_to_send)):
        jobs.append()

@app.route("/signup", method = ['POST'])
def signUp():
    email, password = request.headers.get('email'), request.headers.get('password')
    #Put those info into a database and create a new userID
    
    
    
    
    

if __name__ == "__main__":
    app.run(debug=True)