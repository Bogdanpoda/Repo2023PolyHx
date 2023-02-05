from job_suggestion_finder import *

fake_job1 = Job("finance", "fake_company1", "something1", "idk1", 110000, "montreal")
fake_job2 = Job("finance", "fake_company2", "something2", "idk2", 55000, "montreal")
fake_job3 = Job("general", "fake_company3", "something3", "idk3", 40000, "montreal")

user_john = User("johnmiller@gmail.com", "password1234")
user_john.setFirstName("John")
user_john.setLastName("Miller")
user_john.setContactInfo(ContactInfo(user_john.email, "514-583-3903", "252 rue Van Horne", "H6T7B9", "new york"))
user_john.setEducation(Education("UQAM", "finance", "Bachelor", 3.4, 2015, 2019))
user_john.addWorkExperience(WorkExperience(fake_job1, 2015, 2023))
user_john.addWorkExperience(WorkExperience(fake_job2, 2012, 2015))
user_john.addWorkExperience(WorkExperience(fake_job3, 2009, 2012))


for i in range(10):
    print(i+1, ": ", find10BestJobs(user_john)[i+1].jobTitle, " at ", find10BestJobs(user_john)[i+1].companyName, " in ", find10BestJobs(user_john)[i+1].city, " for ", find10BestJobs(user_john)[i+1].salary, "$")

