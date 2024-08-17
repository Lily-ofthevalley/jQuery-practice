//Function to only read this script when the entire html file has been loaded
$(document).ready(function(){
    let score = 0;
    let currentMole = "";
    let game = "";

    $("#mole_start").click(function(){
        $("#score").text("Score : 0");
        game = setInterval(randomMole, 1250);
    });

    $("#mole_stop").click(function(){
        clearInterval(game);
        if (currentMole) {
            $(currentMole).attr("src", "Images/hole.png");
        }
        score = 0;
    });

    $("img").click(function() {
        if ($(this).attr('src') === 'Images/mole.png') {
            score = score + 1;
            $("#score").text("Score : " + score);
            randomMole();
        }
    });

    function randomMole(){
        let previousMole = currentMole;
        maybeMole = "#hole" + (Math.floor(Math.random() * 9) + 1);

        if (maybeMole == currentMole){
            maybeMole = "#hole" + (Math.floor(Math.random() * 9) + 1);
        } else {
            currentMole = maybeMole;
        }

        if (previousMole) {
            $(previousMole).attr("src", "Images/hole.png");
        }
        $(currentMole).attr("src", "Images/mole.png");
    }
});