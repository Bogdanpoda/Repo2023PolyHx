from flask import Flask
#import firebase_admin
#from firebase_admin import credentials, db
from scoreCalculations import helloworld


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








if __name__ == "__main__":
    app.run(debug=True)