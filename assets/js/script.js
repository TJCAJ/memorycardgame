// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {


    // Add function to start the game






    // Add function for cards that are clicked and match pairs

    /* This part of the javascript code is a both a copy and a minor rewrite of Youtube channel
    Code Grind('https: //www.youtube.com/watch?v=B6aJpbX_IZU') */

    let counter = 0;
    let firstSelection = "";
    let secondSelection = "";

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.add("clicked");

            if (counter === 0) {
                firstSelection = card.getAttribute("playingcard");
                counter++;
            } else {
                secondSelection = card.getAttribute("playingcard");
                counter = 0;

                if (firstSelection === secondSelection) {
                    const correctCards = document.querySelectorAll(
                        ".card[playingcard='" + firstSelection + "']"
                    );

                    correctCards.forEach((card) => {
                        card.classList.add("checked");
                        card.classList.remove("clicked");
                    });

                } else {
                    const incorrectCards = document.querySelectorAll(".card.clicked");
                    incorrectCards.forEach((card) => {
                        card.classList.add("shake");

                        setTimeout(() => {
                            card.classList.remove("shake");
                            card.classList.remove("clicked");
                        }, 800);
                    });
                }
            }
        });
    });


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
})