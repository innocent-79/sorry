
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


const headingText = "MY CUTIE SHREYA❤️THAT'S FOR U";


const letterText = `I know... I got angry, I yelled at u, and I kept talking about breaking up.
 When I'm angry, I honestly lose control and don't even realize what I'm saying or doing.

But tell me... if I can't get angry with u, then who can I get angry with?

Have I spent our whole relationship only being angry at u? Didn't I love u? 
Didn't I love u with everything I had?

A love so deep that I can't even put it into words.


It's all happening because of my anger that's why u don't want to stay with me anymore?
 Maybe that's what it is. 
 
 
 But can't u see my love behind all those mistakes?
 
 I know I shouted. I know I said things I should never have said. 
 
 I've made mistakes before too... and you forgave me. Why can't u forgive me this time?


 When I get angry, I don't even stay in control of myself.


Listen 

Yesterday I kept thinking, "Why did this happen after everything I did?"
 u know I injured my leg a month ago, and it still hasn't healed.
  But out of anger, I went to play anyway, even knowing it would make it worse. I ended up hurting myself even more. 
  
  That's how badly I lose control.


  I'm not telling u all this to make u feel emotional. 
  I'm telling u because I want u to understand what I go through. In situations like these, I lose control of my anger, and that's why I end up reacting the way I do.
Please try to understand me.

If u don't forgive me, then who will?

I know all u can see right now is my anger.
I know you're hurt because of the things I said, and I accept that it's my fault.


But if u break up with me, everything ends.
If you forgive me, we still have a chance to stay together and fix everything.

There are people who truly believe we'll never be apart. 

Even I believed that. I kept thinking, "Maybe not today, but tomorrow she'll come back, she'll talk to me, and we'll make everything right.
 But u never came back. In the end, this was the only way I could try to reach you because u have  blocked me everywhere.

 Do you remember the day we promised each other that we would never be apart? 
 We promised to stay together no matter what life threw at us. No matter how difficult things became, we would forgive each other, stand by each other's side, and spend our whole lives together.


Forget everything else for a moment... don't u love me anymore?

I know this is all happening because of me, because of my anger. But at the end of the day... I'm still urs.

Can't u forgive me? Can't we move forward together after this?

I don't know what else to say. I just poured out everything that was in my heart. Please don't take any of this the wrong way.


I'm truly sorry, babe. ❤️

Please forgive me...

Let's stay together.

Please baby. 🤌🏻❤️

Truly I love u so much ❤️`;


let h = 0;
let p = 0;



function typeHeading(){

    if(h < headingText.length){

    document.getElementById("heading").innerHTML += headingText.charAt(h);

        h++;

        setTimeout(typeHeading,80);

    }else{

        setTimeout(typeLetter,500);

    }

}



function typeLetter(){

    if(p < letterText.length){

        if(letterText.charAt(p) === "\n"){

            document.getElementById("letter").innerHTML += "<br>";

        }else{

            document.getElementById("letter").innerHTML += letterText.charAt(p);

        }

        p++;

        setTimeout(typeLetter,40);

    }

}



setTimeout(typeHeading,1700);

 button.style.display = "none";


   
    setTimeout(function(){

        button.style.display = "block";
        button.style.animation = "dropBounce 1s ease-out";

    },1800);



    // Button click
    button.onclick = function(){

        // Close box hide
        box.style.display = "none";


        // Open box show
        openBox.style.display = "block";
        openBox.style.animation = "openAnimation 1s ease";


        // Button hide
        button.style.display = "none";


        // Letter image show after small delay
        setTimeout(function(){

            letterImage.classList.remove("hidden");
            letterImage.style.animation = "letterUp 1.5s ease-out";

        },500);


    }

    