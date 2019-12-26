window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");   // this selects all the divs inside pads
    const visual = document.querySelector(".visual");
    const colors = 
    [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#00B3FF",
        "#e60808",
        "#f5ec42",
        "#010714",
        "#e099a0",
        "#33de00",
        "#050505",
        "#00F96D",
        "#D612FF",
        "#fff12e",
        "#FF0000",
        "#2954c2",
        "#e099a0",
        "#D612FF"
    ];


    //Lets get going with the sound here
    pads.forEach((pad, index) => 
        {
            pad.addEventListener("click", function()
            {
                sounds[index].currentTime = 0;  //allows multiple clicks of the same sound
                sounds[index].play();

                createBubbles(index);
            });
        });
      // create a function that makes bubbles  
        const createBubbles = (index) => {
            const bubble = document.createElement("div");
            visual.appendChild(bubble);
            bubble.style.backgroundColor = colors[index];
            bubble.style.animation = 'jump 1s ease';
            bubble.addEventListener('animationend', function()
            {
                visual.removeChild(this);
            });
        };
});

