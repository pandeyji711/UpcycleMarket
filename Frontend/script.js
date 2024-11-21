document.addEventListener('DOMContentLoaded', () => {
    // 1. Follow Button Toggle
    const followButtons = document.querySelectorAll('.follow-btn');
    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.textContent = button.textContent === 'Follow' ? 'Following' : 'Follow';
        });
    });

    // 2. Search Popup and Suggestions
    const searchBtn = document.getElementById('search-btn');
    const searchPopup = document.getElementById('search-popup');
    const searchInput = document.getElementById('search-input');
    const askAiBtn = document.getElementById('ask-ai-btn');
    const exampleSuggestions = ['Recycled Products', 'Eco-Friendly Bags', 'DIY Lamps', 'Upcycled Furniture'];

    if (searchBtn && searchPopup && searchInput && askAiBtn) {
        searchBtn.addEventListener('click', (e) => {
            searchPopup.classList.toggle('hidden');
            searchInput.focus();
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
                searchPopup.classList.add('hidden');
            }
        });

        searchPopup.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const suggestions = document.getElementById('suggestions');
            suggestions.innerHTML = '';
            if (query) {
                const filtered = exampleSuggestions.filter(item =>
                    item.toLowerCase().includes(query)
                );
                filtered.forEach(item => {
                    const suggestionDiv = document.createElement('div');
                    suggestionDiv.textContent = item;
                    suggestions.appendChild(suggestionDiv);
                    suggestionDiv.addEventListener('click', () => {
                        searchInput.value = item;
                        suggestions.innerHTML = '';
                    });
                });
            }
        });

        askAiBtn.addEventListener('click', () => {
            const query = searchInput.value;
            if (query) {
                alert(`Asking AI about: ${query}`);
                document.getElementById('suggestions').innerHTML = '';
                searchInput.value = '';
            }
        });
    }

    // 3. Navigation Button Active State
    const navButtons = document.querySelectorAll('.nav-btn');
    const currentPage = window.location.pathname;

    navButtons.forEach(button => {
        const link = button.querySelector('a');
        if (link && link.getAttribute('href') === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // 4. Comment Functionality
document.querySelectorAll('.comment-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent event from bubbling up to the document listener
        e.stopPropagation();

        // Get the parent post and toggle the comment box
        const post = button.closest('.post');
        const commentBox = post.querySelector('.comment-box');

        // Hide any other visible comment boxes
        document.querySelectorAll('.comment-box').forEach(box => {
            if (box !== commentBox) {
                box.classList.add('hidden');
            }
        });

        // Toggle the visibility of the current comment box
        commentBox.classList.toggle('hidden');
    });
});

// Add functionality to post a comment
document.querySelectorAll('.post-comment-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Prevent event from bubbling up to the document listener
        e.stopPropagation();

        const commentBox = button.closest('.comment-box');
        const inputField = commentBox.querySelector('.comment-input');
        const commentsContainer = commentBox.querySelector('.comments');

        const commentText = inputField.value.trim();
        if (commentText) {
            const newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentsContainer.appendChild(newComment);
            inputField.value = '';
        }
    });
});

// Close comment boxes when clicking outside
document.addEventListener('click', (e) => {
    // Check if the click is outside any comment button or comment box
    const isClickInsideCommentBoxOrButton = e.target.closest('.comment-box') || e.target.closest('.comment-btn');
    if (!isClickInsideCommentBoxOrButton) {
        // Hide all comment boxes
        document.querySelectorAll('.comment-box').forEach(commentBox => {
            commentBox.classList.add('hidden');
        });
    }
});

});
