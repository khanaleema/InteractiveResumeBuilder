const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;

    const educationEntries = document.querySelectorAll('#education-section .education-entry');
    const educationData = Array.from(educationEntries).map((entry) => {
        const institution = (entry.querySelector('input[name="institution"]') as HTMLInputElement).value;
        const degree = (entry.querySelector('input[name="degree"]') as HTMLInputElement).value;
        const startDate = (entry.querySelector('input[name="edu-start"]') as HTMLInputElement).value;
        const endDate = (entry.querySelector('input[name="edu-end"]') as HTMLInputElement).value;
        return { institution, degree, startDate, endDate };
    });

    const workEntries = document.querySelectorAll('#work-section .work-entry');
    const workData = Array.from(workEntries).map((entry) => {
        const company = (entry.querySelector('input[name="company"]') as HTMLInputElement).value;
        const position = (entry.querySelector('input[name="position"]') as HTMLInputElement).value;
        const startDate = (entry.querySelector('input[name="work-start"]') as HTMLInputElement).value;
        const endDate = (entry.querySelector('input[name="work-end"]') as HTMLInputElement).value;
        return { company, position, startDate, endDate };
    });

    const skillEntries = document.querySelectorAll('#skills-section .skill-entry');
    const skillData = Array.from(skillEntries).map((entry) => {
        const skill = (entry.querySelector('input[name="skill"]') as HTMLInputElement).value;
        return { skill };
    });

    const profilePic = (document.getElementById('profile-pic-preview') as HTMLImageElement).src;

    resumeOutput.innerHTML = `
        <h2>${name}'s Resume</h2>
        <img src="${profilePic}" alt="Profile Picture" class="profile-pic"/>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        ${educationData.map(data => `
            <div class="resume-entry">
                <p><strong>Institution:</strong> ${data.institution}</p>
                <p><strong>Degree:</strong> ${data.degree}</p>
                <p><strong>Start Date:</strong> ${data.startDate}</p>
                <p><strong>End Date:</strong> ${data.endDate}</p>
            </div>
        `).join('')}

        <h3>Work Experience</h3>
        ${workData.map(data => `
            <div class="resume-entry">
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Position:</strong> ${data.position}</p>
                <p><strong>Start Date:</strong> ${data.startDate}</p>
                <p><strong>End Date:</strong> ${data.endDate}</p>
            </div>
        `).join('')}

        <h3>Skills</h3>
        ${skillData.map(data => `
            <div class="resume-entry">
                <p><strong>Skill:</strong> ${data.skill}</p>
            </div>
        `).join('')}
    `;
});

function previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const preview = document.getElementById('profile-pic-preview') as HTMLImageElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target!.result as string;
            preview.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    } else {
        preview.style.display = 'none';
    }
}

function addEducation() {
    const educationSection = document.getElementById('education-section') as HTMLDivElement;
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = `
        <input type="text" name="institution" placeholder="Institution" required>
        <input type="text" name="degree" placeholder="Degree" required>
        <input type="date" name="edu-start" placeholder="Start Date" required>
        <input type="date" name="edu-end" placeholder="End Date">
    `;
    educationSection.appendChild(newEducation);
}

function addWorkExperience() {
    const workSection = document.getElementById('work-section') as HTMLDivElement;
    const newWork = document.createElement('div');
    newWork.classList.add('work-entry');
    newWork.innerHTML = `
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="position" placeholder="Position" required>
        <input type="date" name="work-start" placeholder="Start Date" required>
        <input type="date" name="work-end" placeholder="End Date">
    `;
    workSection.appendChild(newWork);
}

function addSkill() {
    const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
    const newSkill = document.createElement('div');
    newSkill.classList.add('skill-entry');
    newSkill.innerHTML = `
        <input type="text" name="skill" placeholder="Skill" required>
    `;
    skillsSection.appendChild(newSkill);
}
