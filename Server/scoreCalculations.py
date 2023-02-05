from classes import *
from fieldMatchingFactors import *


def helloworld():
    print("hello world")


def calculateUserMatchScore(user: User, job: Job):
    user_match_score = calculateUserWorkExperienceScore(user, job) + calculateUserEducationScore(user, job) \
                       + calculateUserLocationScore(user, job)
    return user_match_score


def calculateFieldMatchScore(experience, job: Job):
    field_match_score = 0

    if experience.field == "general":
        field_match_score += generalComparisionDict[job.field]
    elif experience.field == "finance":
        field_match_score += financeComparisionDict[job.field]
    elif experience.field == "software":
        field_match_score += softwareComparisionDict[job.field]
    elif experience.field == "Education":
        field_match_score += EducationComparisionDict[job.field]
    return field_match_score


def calculateUserWorkExperienceScore(user: User, job: Job):
    work_experience_score = 0
    for experience in user.workExperience:
        work_experience_score += experience.duration * (calculateFieldMatchScore(experience.job, job) * 5)
    return work_experience_score


def calculateUserEducationScore(user: User, job: Job):
    education_score = calculateFieldMatchScore(user.education, job) * user.education.GPA * 5
    return education_score


def calculateUserLocationScore(user: User, job: Job):
    if user.ContactInfo.city == job.city:
        return 30
    else:
        return 0


def calculateEmployerMatchScore(employer: Employer, user: User):
    score = 0
    pass

