import pandas as pd
import random

from baseClasses import *


def import_jobs():
    data = pd.read_csv('jobs.csv')
    df = pd.DataFrame(data)
    jobs_dictionnary = {}

    for index, row in df.iterrows():
        jobs_dictionnary[index] = Job(row["field"], row["company"], row["title"], row["description"],
                                      random.randrange(50000, 120000, 1000), row["location"])

    return jobs_dictionnary
