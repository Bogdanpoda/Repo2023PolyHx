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
    def __init__(self, field: str, company: str, jobTitle: str, jobDescription: str, salary: int, location: str):
        self.field = field
        self.company = company
        self.jobTitle = jobTitle
        self.jobDescription = jobDescription
        self.salary = salary
        self.location = location
        #self.city = city
        #self.state = state
        #self.country = country
    def to_dict(self):
      return {"field": self.field, "company": self.company, "title":self.jobTitle,"description":self.jobDescription,"location":self.location}


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
