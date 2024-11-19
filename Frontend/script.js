document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchPopup = document.getElementById('search-popup');
    const searchInput = document.getElementById('search-input');
    const askAiBtn = document.getElementById('ask-ai-btn');

    // Toggle search popup
    searchBtn.addEventListener('click', (e) => {
        searchPopup.classList.toggle('hidden');
        searchInput.focus();
        e.stopPropagation(); // Prevent triggering the document click
    });

    // Close search popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
            searchPopup.classList.add('hidden');
        }
    });

    // Prevent popup from closing when clicking inside it
    searchPopup.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Example suggestions
    const exampleSuggestions = ['Recycled Products', 'Eco-Friendly Bags', 'DIY Lamps', 'Upcycled Furniture'];

    // Populate suggestions on input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = ''; // Clear previous suggestions
        if (query) {
            const filtered = exampleSuggestions.filter(item =>
                item.toLowerCase().includes(query)
            );
            filtered.forEach(item => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = item;
                suggestions.appendChild(suggestionDiv);

                // Click on suggestion
                suggestionDiv.addEventListener('click', () => {
                    searchInput.value = item;
                    suggestions.innerHTML = ''; // Clear suggestions
                });
            });
        }
    });

    // Handle Ask AI button
    askAiBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query) {
            alert(`Asking AI about: ${query}`);
            const suggestions = document.getElementById('suggestions');
            suggestions.innerHTML = ''; // Clear suggestions
            searchInput.value = '';
        }
    });
});

