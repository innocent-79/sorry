document.getElementById("yes").onclick=function(){
    alert("Thank you ❤️");
};


document.getElementById("no").onclick=function(){
    alert("Think again 🥺");
};

window.onload = function () {
    const headingText = "IK MY BABIEEEEEE❤️";
    const letterText = `DARLING MUJHE PATA THA TUM MN JAOGE ❤️
CHALO AB SHADI KRNI H❤️
      CHALO BHAG K SHADI KRTE  ❤️`;

    document.getElementById("heading").innerHTML = headingText;

    let i = 0;
    function typeLetter() {
        if (i < letterText.length) {
            document.getElementById("letter").innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typeLetter, 40);
        }
    }

    typeLetter();
};

const hearts = ["❤️","💖","💕","💗","💝"];

function createHeart(){

    const heart = document.createElement("div");
    heart.className = "heart";

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (40 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },6000);

}

setInterval(createHeart,500);