class Education:
    def __init__(self, schoolName: str, field: str, degree: str, GPA: float, startYear: int, graduationYear: int):
        self.schoolName = schoolName
        self.field = field
        self.degree = degree
        self.GPA = GPA
        self.startYear = startYear
        self.graduationYear = graduationYear
        self.duration = graduationYear - startYear


class Company:
    def __init__(self, name: str, location: str, description: str):
        self.name = name
        self.location = location
        self.description = description


class Job:
    def __init__(self, field: str, company: Company, jobTitle: str, jobDescription: str, salary: int, city: str, state: str, country: str):
        self.field = field
        self.company = company
        self.jobTitle = jobTitle
        self.jobDescription = jobDescription
        self.salary = salary
        self.city = city
        self.state = state
        self.country = country


class WorkExperience:
    def __init__(self, job: Job, startYear: int, endYear: int):
        self.job = job
        self.startYear = startYear
        self.endYear = endYear
        self.duration = endYear - startYear


class ContactInfo:
    def __init__(self, email: str, phoneNumber: str, address: str, zipCode: str, city: str, state: str, country: str):
        self.email = email
        self.phoneNumber = phoneNumber
        self.address = address
        self.zipCode = zipCode
        self.city = city
        self.state = state
        self.Country = country
