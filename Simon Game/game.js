var gamePattern = []
const buttonColours = ["red", "green", "blue", "yellow"]
var randomChosenColour = ""
var userClickedPattern = []
var userChosenColour = ""
var level = 0
var gameOn = false
var clickedCounter = 0
var wait = false

function setTitle() {
    $("#level-title").text("Level " + level)
}

$(document).keydown(function(event) {
    if (event.which === 32 && !gameOn) {
        gameOn = true
        clickedCounter = 0
        level = 0
        userClickedPattern = []
        gamePattern = []
        setTitle()
        nextSequence()
    }
});
 
$(document).ready(function() {
    $(".btn").click(function() {
        if (wait == false) {
            userChosenColour = this.id
            userClickedPattern.push(userChosenColour)
            playSound(userChosenColour)
            animatePress(userChosenColour)
            clickedCounter = clickedCounter + 1
            console.log(clickedCounter + " " + level)
            if (clickedCounter == level) {
                checkAnswer(level - 1)
                clickedCounter = 0
            } 
        } else {
            
        }
        
        });
});

// sammenligner array mønstrende med et for-loop og returnerer
function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function checkAnswer(currentLevel) {
    console.log(gamePattern)
    console.log(userClickedPattern);
    if (gamePattern[currentLevel] == userChosenColour && arraysAreIdentical(userClickedPattern, gamePattern)) {
        // sammenligner array mynstrende med et for-loop og returnerer 
        console.log("correct")
        $("#level-title").text("Correct!")
        wait = true
    setTimeout(function() {
        nextSequence()
    }, 1000);
    } else {
        gameOver()
    }
    userClickedPattern = []
}

function gameOver() {
    $("#level-title").text("GAME OVER! Press 'space' restart")
    $("body").addClass("game-over")
    gameOn = false
    wait = false
    level = 0
    setTimeout(function() {
        $("body").removeClass("game-over")
    }, 200);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed"); // Fjern klassen efter 100 ms
    }, 100);
}

function nextSequence() {
    setTimeout(function() {
        const randomNumber = Math.floor((Math.random() * 4));
        console.log(randomNumber);
        randomChosenColour = buttonColours[randomNumber];
        console.log(randomChosenColour)
        gamePattern.push(buttonColours[randomNumber]);
        console.log(gamePattern)
        blinkButton(randomChosenColour)
        playSound(randomChosenColour)
        level = level + 1
        setTitle()
        wait = false
    }, 1000);
};

function blinkButton(color) {
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}