"use strict";
// typescript/scripts.ts
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleSkills');
    const skillsList = document.getElementById('skillsList');
    toggleButton.addEventListener('click', () => {
        if (skillsList.classList.contains('hidden')) {
            skillsList.classList.remove('hidden');
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsList.classList.add('hidden');
            toggleButton.textContent = 'Show Skills';
        }
    });
});
