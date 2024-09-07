// scripts.ts
document.getElementById('toggleSkills')?.addEventListener('click', function() {
    const skillsList = document.getElementById('skillsList');
    if (skillsList) {
        skillsList.classList.toggle('hidden');
        this.textContent = skillsList.classList.contains('hidden') ? 'Show Skills' : 'Hide Skills';
    }
});
