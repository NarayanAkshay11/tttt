document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            performSearch(searchTerm);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    function performSearch(searchTerm) {
        // This is a simple search function that you can expand upon
        const pages = [
            { title: 'Home', url: 'index.html' },
            { title: 'About Us', url: 'about.html' },
            { title: 'Vehicle', url: 'vehicle.html' },
            { title: 'Papers', url: 'papers.html' },
            { title: 'Team', url: 'team.html' },
            { title: 'Contact', url: 'contact.html' }
        ];

        const results = pages.filter(page => 
            page.title.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(results);
    }

    function displaySearchResults(results) {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '<h1>Search Results</h1>';

        if (results.length === 0) {
            mainContent.innerHTML += '<p>No results found.</p>';
        } else {
            const resultList = document.createElement('ul');
            results.forEach(result => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = result.url;
                link.textContent = result.title;
                listItem.appendChild(link);
                resultList.appendChild(listItem);
            });
            mainContent.appendChild(resultList);
        }
    }
});
