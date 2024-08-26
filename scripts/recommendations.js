document.addEventListener('DOMContentLoaded', function() {
    // Placeholder for recommendation system
    function loadRecommendations() {
        const container = document.getElementById('recommendation-container');
        const recommendations = [
            'Short Film: "The Journey"',
            'Documentary: "Urban Wildlife"',
            'Vlog: "A Day in the Life of a Filmmaker"',
            'Promotional Video: "Tech Startup Launch"'
        ];

        recommendations.forEach(rec => {
            const div = document.createElement('div');
            div.textContent = rec;
            div.className = 'recommendation-item';
            container.appendChild(div);
        });
    }

    loadRecommendations();
});
