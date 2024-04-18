document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.course-card');

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            // Remove classes from all cards
            cards.forEach(function(c) {
                c.classList.remove('active-prerequisite', 'active-unlocks');
            });

            // Activate the current card as active-prerequisite
            card.classList.add('active-prerequisite');

            // Highlight the cards that this one unlocks
            var unlocks = card.getAttribute('data-unlocks');
            if (unlocks) {
                unlocks.split(' ').forEach(function(id) {
                    var cardToUnlock = document.querySelector(`.course-card[data-id="${id}"]`);
                    if (cardToUnlock) {
                        cardToUnlock.classList.add('active-unlocks');
                    }
                });
            }

            // Highlight the card that is a prerequisite of this one
            var prerequisite = card.getAttribute('data-prerequisite');
            if (prerequisite) {
                var prerequisiteCard = document.querySelector(`.course-card[data-id="${prerequisite}"]`);
                if (prerequisiteCard) {
                    prerequisiteCard.classList.add('active-prerequisite');
                }
            }
        });
    });
});