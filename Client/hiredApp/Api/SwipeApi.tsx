import axios from "axios";
import React from "react";
import {IJobModel} from '../Models/JobModel'

class JobModel implements IJobModel {
    field: string;
    company: string;
    location: string;
    description: string;
    salary:number
    title:string
    constructor(field: string, company: string,location: string, description: string,salary:number,title:string) {
        this.field=field
        this.company=company
        this.location =location
        this.description=description
        this.salary=salary
        this.title=title
    }
  }

export default async function  getJobBatch(filter:string){
    console.log("in api!")
    var list: JobModel[] = [];

    try{
        const response = await axios.get("http://10.0.2.2:5000/job_batch/", {
            params: {
              filter:filter
            },
          });

        console.log(response.data.results[0])

        

        for (let index = 0; index < response.data.results.length; ++index) {
            const element = response.data.results[index];

            list.push(new JobModel(element.field,element.company,element.location,element.description,element.salary,element.title))  
        }

        console.log(list[0].company)


    }catch(error){

        console.log(error)
    }
    return list
    
}

