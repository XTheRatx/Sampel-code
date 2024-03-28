// Vælg alle fundne elementer med klassen .drum og gem dem i konstanten 'buttons'.
const buttons = document.querySelectorAll('.drum');

// Tilføj en event listener til hele dokumentet, der reagerer på 'keydown' begivenheder.
document.addEventListener("keydown", function(event) {
    // Når en tast trykkes ned, kald 'DeterminSound' funktionen med den trykkede tasts tegn.
    DeterminSound(event.key);
});

// Gå igennem hvert 'button' element i 'buttons' arrayet.
buttons.forEach(function(button) {
    // Tilføj en event listener til hvert 'button' element, der reagerer på 'click' begivenheder.
    button.addEventListener("click", function(event) {
        // Gem indholdet (innerHTML) af det klikkede element i 'buttonInnerHTML'.
        const buttonInnerHTML = event.target.innerHTML;
        // Log 'buttonInnerHTML' til konsollen (primært til debugging).
        console.log(buttonInnerHTML);
        // Kald 'DeterminSound' funktionen med indholdet af det klikkede element.
        DeterminSound(buttonInnerHTML);
        // aktiver animation for klikkede knap
        buttonAnimation(event)
    });
});

// Definer 'play' funktionen, der tager en URL til en lydfil som argument.
function play(url) {
    // Opret et nyt Audio objekt og gem det i variablen 'audio'.
    var audio = new Audio(url);
    // Afspil lydfilen.
    audio.play();
};  

// Definer 'DeterminSound' funktionen, der tager en nøgle (key) som argument.
function DeterminSound(key) {
    // aktiver animation for klikkede knap
    buttonAnimation(key)
    // Brug en switch-konstruktion til at bestemme handling baseret på værdien af 'key'.
    switch (key) {
        case "w":
            // Hvis 'key' er "w", afspil lyden 'tom-1.mp3'.
            play("./sounds/tom-1.mp3")
            break;

        case "a":
            // Hvis 'key' er "a", afspil lyden 'tom-2.mp3'.
            play("./sounds/tom-2.mp3")
            break;

        case "s":
            // Hvis 'key' er "s", afspil lyden 'tom-3.mp3'.
            play("./sounds/tom-3.mp3")
            break;

        case "d":
            // Hvis 'key' er "d", afspil lyden 'tom-4.mp3'.
            play("./sounds/tom-4.mp3")
            break;

        case "j":
            // Hvis 'key' er "j", afspil lyden 'crash.mp3'.
            play("./sounds/crash.mp3")
            break;

        case "k":
            // Hvis 'key' er "k", afspil lyden 'kick-bass.mp3'.
            play("./sounds/kick-bass.mp3")
            break;

        case "l":
            // Hvis 'key' er "l", afspil lyden 'snare.mp3'.
            play("./sounds/snare.mp3")
            break;

        default:
            // Hvis 'key' ikke matcher nogen af de ovenstående, log 'key' til konsollen.
            console.log(key)
            break;
    }
};

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function() {
    activeButton.classList.remove("pressed");
    }, 100)
};