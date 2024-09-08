var resumeForm = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var educationEntries = document.querySelectorAll('#education-section .education-entry');
    var educationData = Array.from(educationEntries).map(function (entry) {
        var institution = entry.querySelector('input[name="institution"]').value;
        var degree = entry.querySelector('input[name="degree"]').value;
        var startDate = entry.querySelector('input[name="edu-start"]').value;
        var endDate = entry.querySelector('input[name="edu-end"]').value;
        return { institution: institution, degree: degree, startDate: startDate, endDate: endDate };
    });
    var workEntries = document.querySelectorAll('#work-section .work-entry');
    var workData = Array.from(workEntries).map(function (entry) {
        var company = entry.querySelector('input[name="company"]').value;
        var position = entry.querySelector('input[name="position"]').value;
        var startDate = entry.querySelector('input[name="work-start"]').value;
        var endDate = entry.querySelector('input[name="work-end"]').value;
        return { company: company, position: position, startDate: startDate, endDate: endDate };
    });
    var skillEntries = document.querySelectorAll('#skills-section .skill-entry');
    var skillData = Array.from(skillEntries).map(function (entry) {
        var skill = entry.querySelector('input[name="skill"]').value;
        return { skill: skill };
    });
    var profilePic = document.getElementById('profile-pic-preview').src;
    resumeOutput.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <img src=\"").concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-pic\"/>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Address:</strong> ").concat(address, "</p>\n\n        <h3>Education</h3>\n        ").concat(educationData.map(function (data) { return "\n            <div class=\"resume-entry\">\n                <p><strong>Institution:</strong> ".concat(data.institution, "</p>\n                <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n                <p><strong>Start Date:</strong> ").concat(data.startDate, "</p>\n                <p><strong>End Date:</strong> ").concat(data.endDate, "</p>\n            </div>\n        "); }).join(''), "\n\n        <h3>Work Experience</h3>\n        ").concat(workData.map(function (data) { return "\n            <div class=\"resume-entry\">\n                <p><strong>Company:</strong> ".concat(data.company, "</p>\n                <p><strong>Position:</strong> ").concat(data.position, "</p>\n                <p><strong>Start Date:</strong> ").concat(data.startDate, "</p>\n                <p><strong>End Date:</strong> ").concat(data.endDate, "</p>\n            </div>\n        "); }).join(''), "\n\n        <h3>Skills</h3>\n        ").concat(skillData.map(function (data) { return "\n            <div class=\"resume-entry\">\n                <p><strong>Skill:</strong> ".concat(data.skill, "</p>\n            </div>\n        "); }).join(''), "\n    ");
});
function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('profile-pic-preview');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
    else {
        preview.style.display = 'none';
    }
}
function addEducation() {
    var educationSection = document.getElementById('education-section');
    var newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = "\n        <input type=\"text\" name=\"institution\" placeholder=\"Institution\" required>\n        <input type=\"text\" name=\"degree\" placeholder=\"Degree\" required>\n        <input type=\"date\" name=\"edu-start\" placeholder=\"Start Date\" required>\n        <input type=\"date\" name=\"edu-end\" placeholder=\"End Date\">\n    ";
    educationSection.appendChild(newEducation);
}
function addWorkExperience() {
    var workSection = document.getElementById('work-section');
    var newWork = document.createElement('div');
    newWork.classList.add('work-entry');
    newWork.innerHTML = "\n        <input type=\"text\" name=\"company\" placeholder=\"Company\" required>\n        <input type=\"text\" name=\"position\" placeholder=\"Position\" required>\n        <input type=\"date\" name=\"work-start\" placeholder=\"Start Date\" required>\n        <input type=\"date\" name=\"work-end\" placeholder=\"End Date\">\n    ";
    workSection.appendChild(newWork);
}
function addSkill() {
    var skillsSection = document.getElementById('skills-section');
    var newSkill = document.createElement('div');
    newSkill.classList.add('skill-entry');
    newSkill.innerHTML = "\n        <input type=\"text\" name=\"skill\" placeholder=\"Skill\" required>\n    ";
    skillsSection.appendChild(newSkill);
}
