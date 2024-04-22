// Wait for the DOM to finish loading before running the game 
document.addEventListener('DOMContentLoaded', function () {


    // Create an array with cards

    let myCards = [{
            name: "ace-black",
            image: "assets/images/A-C.png"
        },
        {
            name: "ace-red",
            image: "assets/images/A-D.png"
        },
        {
            name: "ace-black",
            image: "assets/images/A-S.png"
        }, {
            name: "ace-red",
            image: "assets/images/A-H.png"
        },
    ];

    // Pushing in the array with cards

    /*myCards.push(newDeckObject);*/



    // set up grid with playing cards on table

    const container = document.querySelector(".cards-container");

    function makeGrid() {
        for (i = 0; i < 4; i++) {
            const row = document.createElement("div");
            row.className = "card";
            container.appendChild(row);

            for (j = 1; j < 4; j++) {
                const col = document.createElement("div");
                col.className = "card";
                row.appendChild(col);
            }
        }
    }

    makeGrid();
})