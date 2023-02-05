import pandas as pd
from baseClasses import Job
import random

df = pd.read_csv('job_postings.csv')

companies = ["Walmart", "Amazon","Apple","CVS Health","UnitedHealth Group","Exxon Mobil","Berkshire Hathaway","Alphabet","Microsoft","Costco","Cigna","DRW","genetec", "Morgan Stanley","Chevron","thirdBridge","Matrox","Home Depot"]

industries =["Finan","medicine","Soft","Education","Art","Biology","general",'Devel',"Teach","Eng"]

locations =[ "montreal","new york","paris","london","tokyo","bucharest","munich","kiev"]

def parseData():

    indexMain =0

    jobBatch=[]

    data=[]

    print("Devel" in "Graduate Opportunity: Firmware Developer")

    while(indexMain < 500):
        #print(indexMain)
        index = random.randint(0 , 17879)
        jobOut=[]
        

        rawField = df.loc[index,"industry"]
        #print(rawField)
        field = ""
        if(rawField== None or rawField!=rawField):
            print("cringe")
        else:
            #print("hellu")
            #fieldIndex=0
            for aField in industries:
                #print(aField,rawField, aField in rawField)
                if aField in rawField:
                    field=aField
                    break
            else:
                field = "general"
            
            title = df.loc[index,"title"]
            description =df.loc[index,"description"]
            indexLoc= random.randint(0,7)
            location = locations[indexLoc]
            indexComp = random.randint(0,16)
            company= companies[indexComp]
            salary = 100000
            if(field == "Soft" or field=="Devel"):
                field="software"
            elif field=="Teach":
                field=="education"
            elif field == 'Finan':
                field="finance"
            
            jobOut.append(title)
            jobOut.append(company)
            jobOut.append(field)
            jobOut.append(location)
            jobOut.append(description)
            data.append(jobOut)
            indexMain += 1
    dw= pd.DataFrame(data,columns=['title','company','field','location','description'])

    dw.to_csv('jobs.csv', encoding='utf-8', index=True)

def filterJob(filter):

    jobList=[]
    datajob = pd.read_csv('jobs.csv')

    if(filter!="all"):
    
        for row in datajob.iterrows():
            #print(row[1][3])
            if row[1][3]== filter:
                title = row[1][1]
                company = row[1][2]
                field=row[1][3]
                location = row[1][4]
                desc = row[1][5]
                jobList.append(Job(field,company,title,desc,60000,location))
    else:
        index =0
        for row in datajob.iterrows():
            if index == 15:
                break
            title = row[1][1]
            company = row[1][2]
            field=row[1][3]
            location = row[1][4]
            desc = row[1][5]
            jobList.append(Job(field,company,title,desc,60000,location))
            index+=1
    
    return jobList











        


       









        
                    



        


        

        






    
    



