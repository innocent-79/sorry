document.getElementById("yes").onclick=function(){
    alert("Thank you ❤️");
};


document.getElementById("no").onclick=function(){
    alert("Think again 🥺");
};

window.onload = function () {
    const headingText = "MY BABY ❤️";
    const letterText = `MERE JIGAR KA TUKRA ❤️
      MAF NHI KROGE TUM ❤️`;

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

 document.getElementById("yes").onclick = function () {
       
        window.location.href = "tnx.html";
    };

   
    document.getElementById("no").onclick = function () {
      
        window.location.href = "yes or no 3.html";
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