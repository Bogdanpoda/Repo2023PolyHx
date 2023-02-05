from baseClasses import *
from fieldMatchingFactors import *


class User:
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password
        self.firstName = None
        self.lastName = None
        self.ContactInfo = None
        self.education = None
        self.workExperience = []
        self.skills = []

    def setFirstName(self, firstName: str):
        self.firstName = firstName

    def setLastName(self, lastName: str):
        self.lastName = lastName

    def setContactInfo(self, contactInfo: ContactInfo):
        self.ContactInfo = contactInfo

    def setEducation(self, education: Education):
        self.education = education

    def addWorkExperience(self, workExperience: WorkExperience):
        self.workExperience.append(workExperience)

    def addskills(self, skill: str):
        self.skills.append(skill)


class Employer:
    def __init__(self, email: str, password: str):
        self.email = email
        self.password = password
        self.companyName = None
        self.jobPostings = []

    def setCompanyName(self, companyName: str):
        self.companyName = companyName

    def addJobPosting(self, jobPosting: Job):
        self.jobPostings.append(jobPosting)
