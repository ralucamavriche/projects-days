const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('expanded'));
        card.classList.add('expanded');
    });
});