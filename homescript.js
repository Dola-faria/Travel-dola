document.addEventListener('DOMContentLoaded', () => {
    // Handle search
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        alert(`Searching for: ${searchBar.value}`);
        // You could call your API here
      }
    });
  
    // Simulate card click
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const destination = card.querySelector('strong').innerText;
        alert(`View more about ${destination}`);
        // Replace alert with redirect or modal if needed
      });
    });
  });
  