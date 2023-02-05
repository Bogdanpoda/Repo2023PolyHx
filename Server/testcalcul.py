from job_suggestion_finder import *

fake_job1 = Job("software", "fake_company1", "something1", "idk1", 70000, "Vancouver")
fake_job2 = Job("general", "fake_company2", "something2", "idk2", 55000, "Toronto")
fake_job3 = Job("Education", "fake_company3", "something3", "idk3", 40000, "Montreal")

user_roger = User("rogertremblay@gmail.com", "password1234")
user_roger.setFirstName("Roger")
user_roger.setLastName("Tremblay")
user_roger.setContactInfo(ContactInfo(user_roger.email, "514-634-0910", "252 rue Van Horne", "H6T7B9", "montreal"))
user_roger.setEducation(Education("McGill", "software", "Master", 3.5, 2015, 2019))
user_roger.addWorkExperience(WorkExperience(fake_job1, 2010, 2023))
user_roger.addWorkExperience(WorkExperience(fake_job2, 2015, 2017))
user_roger.addWorkExperience(WorkExperience(fake_job3, 2005, 2015))
user_roger.addskills("Python")
user_roger.addskills("Java")
user_roger.addskills("C++")

for i in range(10):
    print(i+1, ": ", find10BestJobs(user_roger)[i+1].jobTitle, " at ", find10BestJobs(user_roger)[i+1].companyName, " in ", find10BestJobs(user_roger)[i+1].city, " for ", find10BestJobs(user_roger)[i+1].salary, "$")




