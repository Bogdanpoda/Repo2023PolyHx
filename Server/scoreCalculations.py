import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from classes import *
from fieldMatchingFactors import *


def calculateUserMatchScore(user: User, job: Job):
    user_match_score = calculateUserWorkExperienceScore(user, job) + calculateUserEducationScore(user, job) \
        + calculateUserLocationScore(user, job)
    return user_match_score


def calculateFieldMatchScore(experience, job: Job):
    field_match_score = 0

    if experience.field == "Agriculture":
        field_match_score += AgricultureComparisionDict[job.field]
    elif experience.field == "Architecture":
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
    elif experience.field == "Finance":
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
    work_experience_score = 0
    for experience in user.workExperience:
        print(experience.job.field)
        work_experience_score += experience.duration * (calculateFieldMatchScore(experience.job, job) * 5)
    return work_experience_score


def calculateUserEducationScore(user: User, job: Job):
    education_score = calculateFieldMatchScore(user.education, job) * user.education.GPA * 5
    return education_score


def calculateUserLocationScore(user: User, job: Job):
    if user.ContactInfo.city == job.city:
        return 10
    elif user.ContactInfo.state == job.state:
        return 5
    elif user.ContactInfo.country == job.country:
        return 2
    else:
        return 0


def calculateEmployerMatchScore(employer: Employer, user: User):
    score = 0
    return score
