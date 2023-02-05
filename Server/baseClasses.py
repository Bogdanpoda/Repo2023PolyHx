class Education:
    def __init__(self, schoolName: str, field: str, degree: str, startYear: int, graduationYear: int):
        self.schoolName = schoolName
        self.field = field
        self.degree = degree
        self.startYear = startYear
        self.graduationYear = graduationYear
        self.duration = graduationYear - startYear


class Company:
    def __init__(self, name: str, location: str, description: str, jobs: list):
        self.name = name
        self.location = location
        self.description = description


class Job:
    def __init__(self, field: str, company: str, jobTitle: str, jobDescription: str, salary: int, location: str):
        self.field = field
        self.company = company
        self.jobTitle = jobTitle
        self.jobDescription = jobDescription
        self.salary = salary
        self.location = location


class WorkExperience:
    def __init__(self, job: Job, startYear: int, endYear: int):
        self.job = job
        self.startYear = startYear
        self.endYear = endYear
        self.duration = endYear - startYear


class ContactInfo:
    def __init__(self, email: str, phoneNumber: str, address: str, zipCode: int, city: str, state: str, Country: str):
        self.email = email
        self.phoneNumber = phoneNumber
        self.address = address
        self.zipCode = zipCode
        self.city = city
        self.state = state
        self.Country = Country
