function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;

    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;

    const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const jobYear = (document.getElementById('job-year') as HTMLInputElement).value;

    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
    let profilePictureHTML = '';

    if (profilePictureInput.files && profilePictureInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                const imgSrc = e.target.result as string;
                profilePictureHTML = `<img src="${imgSrc}" alt="Profile Picture" class="profile-picture">`;
                
                // Generate the resume preview with the profile picture after image is loaded
                displayResume(profilePictureHTML, name, email, phone, degree, university, gradYear, jobTitle, company, jobYear, skills);
            }
        };
        reader.readAsDataURL(profilePictureInput.files[0]);
    } else {
        // Generate the resume preview without a profile picture
        displayResume('', name, email, phone, degree, university, gradYear, jobTitle, company, jobYear, skills);
    }
}

// Function to display the resume with or without the profile picture
function displayResume(profilePictureHTML: string, name: string, email: string, phone: string, degree: string, university: string, gradYear: string, jobTitle: string, company: string, jobYear: string, skills: string[]): void {
    const resumeHTML = `
        ${profilePictureHTML}
        <h2>${name}</h2>
        <p>Contact: ${email} | ${phone}</p>

        <h3><u>Education</u></h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Year:</strong> ${gradYear}</p>

        <h3><u>Work Experience</u></h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${jobYear}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;

    const resumePreview = document.getElementById('resume-preview');
    if (resumePreview) {
        resumePreview.innerHTML = resumeHTML;
    }
}
