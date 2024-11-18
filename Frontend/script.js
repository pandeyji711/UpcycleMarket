document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
        });
    });
});
