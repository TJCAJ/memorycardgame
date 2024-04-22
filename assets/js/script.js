// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {


    // Add function to start the game






    // Add function for cards that are clicked

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("clicked");

        })
    })
})



// Add function to shuffle cards

const shufflecards = document.querySelectorAll(".cards");







// Add function to reset board

function resetBoard() {

}






// Add function of timer

function timer() {

}






// Add function of adding score

function addScore() {

}


// Modal with game info

const modal = document.querySelector("#modal")
const openModalButton = document.querySelector("#open-modal-btn")
const overlay = document.querySelector("#overlay")

openModalButton.addEventListener("click", () => {
    modal.classList.add("open")
    overlay.classList.add("open")
})

overlay.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.remove("open")
    overlay.classList.remove("open")
}