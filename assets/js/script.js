// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {


    // Modal with game info

    const modal = document.querySelector("#modal")
    const openModalButton = document.querySelector("#open-modal-btn")
    const closeModalButton = document.querySelector("#close-modal-btn")
    const overlay = document.querySelector("#overlay")

    openModalButton.addEventListener("click", () => {
        modal.classList.add("open")
        overlay.classList.add("open")
    })
    closeModalButton.addEventListener("click", closeModal)
    overlay.addEventListener("click", closeModal)

    function closeModal() {
        modal.classList.remove("open")
        overlay.classList.remove("open")
    }


    // Function for cards that are clicked and match pairs

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


    // Functions related to timer and starting the game

    let count = 0;
    let timer;

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(function () {
            count++;
            updateTimer();
            if (count >= 30) {
                clearInterval(timer);
                document.getElementById("countdown-timer").textContent = "TIME UP";
            }
        }, 1000);
    }

    // Changed reeset function to reloadPage
    function reloadPage() {
        /* clearInterval(timer);
         count = 120;
         updateTimer();*/
        location.reload();
    }

    function updateTimer() {
        document.getElementById("countdown-timer").textContent = count;
    }

    document.getElementById("shuffle-start-button").addEventListener("click", startTimer);
    document.getElementById("reset-button").addEventListener("click", reloadPage);


    // Add function to shuffle cards

    document.getElementById('shuffle-start-button').addEventListener('click', function () {
        shuffleCards();
    });

    function shuffleCards() {
        const cardlist = document.getElementById('card-list');
        const cards = Array.from(cardlist.children);

        cards.sort(() => Math.random() - 0.5);

        cards.forEach(card => cardlist.appendChild(card));
    }


})