from scoreCalculations import *
from job_database_importer import *

jobs_dictionnary = import_jobs()


def find10BestJobs(user):
    match_scores_dict = {}
    for i in jobs_dictionnary:
        match_scores_dict[i] = calculateUserMatchScore(user, jobs_dictionnary[i])
    sorted_match_scores_list = sorted(match_scores_dict.items(), key=lambda x: x[1], reverse=True)
    ten_best_jobs = {}
    for i in range(len(sorted_match_scores_list[:10])):
        ten_best_jobs[i+1] = jobs_dictionnary[sorted_match_scores_list[i][0]]
    return ten_best_jobs
