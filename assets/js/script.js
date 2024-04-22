// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {

    // Add function for cards that are clicked

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("clicked");

        })
    })
})