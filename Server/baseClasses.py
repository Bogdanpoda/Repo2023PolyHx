class Education:
    def __init__(self, schoolName: str, field: str, degree: str, GPA: float, startYear: int, graduationYear: int):
        self.schoolName = schoolName
        self.field = field
        self.degree = degree
        self.GPA = GPA
        self.startYear = startYear
        self.graduationYear = graduationYear
        self.duration = graduationYear - startYear


class Job:
    def __init__(self, field: str, companyName: str, jobTitle: str, jobDescription: str, salary: int, city: str):
        self.field = field
        self.companyName = companyName
        self.jobTitle = jobTitle
        self.jobDescription = jobDescription
        self.salary = salary
        self.city = city
        self.gpa_requirement = None

class WorkExperience:
    def __init__(self, job: Job, startYear: int, endYear: int):
        self.job = job
        self.startYear = startYear
        self.endYear = endYear
        self.duration = endYear - startYear


class ContactInfo:
    def __init__(self, email: str, phoneNumber: str, address: str, zipCode: str, city: str):
        self.email = email
        self.phoneNumber = phoneNumber
        self.address = address
        self.zipCode = zipCode
        self.city = city
