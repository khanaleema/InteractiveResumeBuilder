// scripts.ts

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
        <div class="resume-header">
            <div class="resume-profile-pic-box">
                <img src="${profilePic}" alt="Profile Picture" class="resume-profile-pic">
            </div>
            <div class="contact-info">
                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
            </div>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <ul>
                ${educationData.map(ed => `
                    <li><strong>${ed.institution}</strong> - ${ed.degree}<br>From ${ed.startDate} to ${ed.endDate}</li>
                `).join('')}
            </ul>
        </div>
        <div class="resume-section">
            <h3>Work Experience</h3>
            <ul>
                ${workData.map(work => `
                    <li><strong>${work.company}</strong> - ${work.position}<br>From ${work.startDate} to ${work.endDate}</li>
                `).join('')}
            </ul>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <ul>
                ${skillData.map(skill => `
                    <li>${skill.skill}</li>
                `).join('')}
            </ul>
        </div>
    `;
});

function addEducation() {
    const section = document.getElementById('education-section');
    const educationEntry = document.createElement('div');
    educationEntry.className = 'education-entry';
    educationEntry.innerHTML = `
        <input type="text" name="institution" placeholder="Institution" required>
        <input type="text" name="degree" placeholder="Degree" required>
        <input type="date" name="edu-start" placeholder="Start Date" required>
        <input type="date" name="edu-end" placeholder="End Date" required>
    `;
    section?.appendChild(educationEntry);
}

function addWorkExperience() {
    const section = document.getElementById('work-section');
    const workEntry = document.createElement('div');
    workEntry.className = 'work-entry';
    workEntry.innerHTML = `
        <input type="text" name="company" placeholder="Company" required>
        <input type="text" name="position" placeholder="Position" required>
        <input type="date" name="work-start" placeholder="Start Date" required>
        <input type="date" name="work-end" placeholder="End Date" required>
    `;
    section?.appendChild(workEntry);
}

function addSkill() {
    const section = document.getElementById('skills-section');
    const skillEntry = document.createElement('div');
    skillEntry.className = 'skill-entry';
    skillEntry.innerHTML = `
        <input type="text" name="skill" placeholder="Skill" required>
    `;
    section?.appendChild(skillEntry);
}

function previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.getElementById('profile-pic-preview') as HTMLImageElement;
            if (e.target?.result) {
                img.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    }
}
