// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {

    // Modal with game info

    const modal = document.querySelector("#modal");
    const closeModalButton = document.querySelector("#close-modal-btn");
    const overlay = document.querySelector("#overlay");

    // Add a mouse over event listener to the element that should open the modal
    const modalTrigger = document.querySelector("#modal-trigger");
    modalTrigger.addEventListener("mouseover", openModal);


    function openModal() {
        modal.classList.add("open");
        overlay.classList.add("open");
    }

    closeModalButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    function closeModal() {
        modal.classList.remove("open");
        overlay.classList.remove("open");
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
                firstSelection = card.getAttribute("data-type");
                counter++;
            } else {
                secondSelection = card.getAttribute("data-type");
                counter = 0;

                if (firstSelection === secondSelection) {
                    const correctCards = document.querySelectorAll(
                        ".card[data-type='" + firstSelection + "']"
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
            if (count >= 10) {
                clearInterval(timer);
                document.getElementById("countdown-timer").textContent = "TIME UP";
                gameOver();
            }
        }, 1000);
    }

    function reloadPage() {
        location.reload();
    }

    function updateTimer() {
        document.getElementById("countdown-timer").textContent = count;
    }

    document.getElementById("shuffle-start-button").addEventListener("click", function () {
        shuffleCards();
    });

    const list = document.getElementsByTagName("UL")[0];
    const listCards = list.getElementsByTagName("li");

    for (let i = 0; i < listCards.length; i++) {
        listCards[i].addEventListener("click", function () {
            startTimer();
        });
    }


    document.getElementById("reset-button").addEventListener("click", reloadPage);
    // Add function to shuffle cards

    function shuffleCards() {
        const cardlist = document.getElementById('card-list');
        const cards = Array.from(cardlist.children);

        cards.sort(() => Math.random() - 0.5);

        cards.forEach(card => cardlist.appendChild(card));
    }
    // Function to handle TIME UP
    function gameOver() {
        document.getElementById('gameOverModal').style.display = 'flex';
    }

    // Adds an event listener to the restart button
    document.getElementById('restartButton').addEventListener('click', function () {
        // Closes the modal
        document.getElementById('gameOverModal').style.display = 'none';

        // Restart the game
        reStartGame();
    });

    function reStartGame() {
        location.reload();
    }

});