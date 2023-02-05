import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from classes import *
from fieldMatchingFactors import *


def calculateUserMatchScore(user: User, job: Job):
    score = 0
    return score


def calculateFieldMatchScore(experience, job: Job):
    field_match_score = 0

    if experience.field == "Agriculture":
        field_match_score += AgricultureComparisionDict[job.field]
    elif experience.job.field == "Architecture":
        field_match_score += ArchitectureComparisionDict[job.field]
    elif experience.field == "Arts":
        field_match_score += ArtsComparisionDict[job.field]
    elif experience.field == "Biology":
        field_match_score += BiologyComparisionDict[job.field]
    elif experience.field == "Education":
        field_match_score += EducationComparisionDict[job.field]
    elif experience.field == "SoftwareEngineering":
        field_match_score += SoftwareEngineeringComparisionDict[job.field]
    elif experience.field == "MecanicalEngineering":
        field_match_score += MecanicalEngineeringComparisionDict[job.field]
    elif experience.job.field == "Finance":
        field_match_score += FinanceComparisionDict[job.field]
    elif experience.field == "Hospitality":
        field_match_score += HospitalityComparisionDict[job.field]
    elif experience.field == "Mathematics":
        field_match_score += MathematicsComparisionDict[job.field]
    elif experience.field == "Medicine":
        field_match_score += MedicineComparisionDict[job.field]
    elif experience.field == "Music":
        field_match_score += MusicComparisionDict[job.field]
    elif experience.field == "Logistics":
        field_match_score += LogisticsComparisionDict[job.field]
    return field_match_score


def calculateUserWorkExperienceScore(user: User, job: Job):
    pass


def calculateUserEducationScore(user: User, job: Job):
    score = 0
    return score


def calculateEmployerMatchScore(employer: Employer, user: User):
    score = 0
    return score
