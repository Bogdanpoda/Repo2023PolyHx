from flask import Flask,jsonify,request
#import firebase_admin
#from firebase_admin import credentials, db
from scoreCalculations import helloworld
from DatasetManager import parseData, filterJob 
import json


app = Flask(__name__)


# Initialize Firestore DB
#cred = credentials.Certificate('key.json')
#firebase_admin.initialize_app(cred, {
 #   "databaseURL": "https://polyhack-d4607-default-rtdb.firebaseio.com/"
#})


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

# @app.route("/signup", method = ['POST'])
# def signUp():
#     email, password = request.headers.get('email'), request.headers.get('password')
#     #Put those info into a database and create a new userID
    
    
    
    
    

@app.route("/job_batch/", methods=["GET"])
def  get_job_batch():
    print("in job batch!")
    filter = request.args.get('filter')
    print(filter)
    jobs = filterJob("all")
    results = [obj.to_dict() for obj in jobs]
    jsdata = json.dumps({"results": results})
    # jobj = {'data' : jobs}
    # entries=json.dumps(jobj)
    print(len(jobs))
    
    return jsdata









if __name__ == "__main__":
    #parseData()
    #jobs =filterJob("finance")

   



    app.run(debug=True)
    
