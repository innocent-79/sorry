window.onload = function () {

const headingText = "My Dear Shreya ❤️";

const letterText = `I know I hurt you a lot.

In my anger, I said so many things that I should never have said.
At that moment, I didn't know what to do or how to handle my emotions.
I can't take back those words, but I can sincerely apologize for them.

From the bottom of my heart... I'm truly sorry.

Please forgive me. ❤️`;

const heading = document.getElementById("heading");
const letter = document.getElementById("letter");
const button = document.getElementById("openBtn");

button.style.display = "none";

let h = 0;
let l = 0;

function typeHeading() {
    if (h < headingText.length) {
        heading.innerHTML += headingText.charAt(h);
        h++;
        setTimeout(typeHeading, 80);
    } else {
        setTimeout(typeLetter, 800);
    }
}

function typeLetter() {
    if (l < letterText.length) {

        if (letterText.charAt(l) === "\n") {
            letter.innerHTML += "<br>";
        } else {
            letter.innerHTML += letterText.charAt(l);
        }

        l++;
        setTimeout(typeLetter, 35);

    } else {

        setTimeout(function () {
            button.style.display = "block";
            button.style.animation=
            "dropBounce 1s ease-out"
        }, 1000);

    }
}

setTimeout(typeHeading, 5000);

};