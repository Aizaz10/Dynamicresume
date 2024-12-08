function generateResume() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var gradYear = document.getElementById('grad-year').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var jobYear = document.getElementById('job-year').value;
    var skills = document.getElementById('skills').value.split(',');
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePictureHTML = '';
    if (profilePictureInput.files && profilePictureInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                var imgSrc = e.target.result;
                profilePictureHTML = "<img src=\"".concat(imgSrc, "\" alt=\"Profile Picture\" class=\"profile-picture\">");
                // Generate the resume preview with the profile picture after image is loaded
                displayResume(profilePictureHTML, name, email, phone, degree, university, gradYear, jobTitle, company, jobYear, skills);
            }
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    }
    else {
        // Generate the resume preview without a profile picture
        displayResume('', name, email, phone, degree, university, gradYear, jobTitle, company, jobYear, skills);
    }
}
// Function to display the resume with or without the profile picture
function displayResume(profilePictureHTML, name, email, phone, degree, university, gradYear, jobTitle, company, jobYear, skills) {
    var resumeHTML = "\n        ".concat(profilePictureHTML, "\n        <h2>").concat(name, "</h2>\n        <p>Contact: ").concat(email, " | ").concat(phone, "</p>\n\n        <h3><u>Education</u></h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>University:</strong> ").concat(university, "</p>\n        <p><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n\n        <h3><u>Work Experience</u></h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Duration:</strong> ").concat(jobYear, "</p>\n\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
    var resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = resumeHTML;
    }
}
