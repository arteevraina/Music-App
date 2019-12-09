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
        "#636109",
        "#e60808",
        "#29d657",
        "#ed5807"
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

//changes in js...

$("#western").click(function() {   
    $("#text").fadeOut(600);
    $(".type").fadeOut(600, function() {
        $("#textw").fadeIn(600);
        $(".pads").fadeIn(600);
        $(".pads").css("display", "flex");
    });
    $(this).css("border", "3px solid white");
    $(this).css("color", "white");
});

$("#classical").click(function() {
    $("#text").fadeOut(600);
    $(".type").fadeOut(600, function() {
        $("#textc").fadeIn(600);
        $(".pads").fadeIn(600);
        $(".pads").css("display", "flex");
    });
    $(this).css("border", "3px solid white");
    $(this).css("color", "white");
    $("#sound1").attr("src", "");
    $("#sound2").attr("src", "");
    $("#sound3").attr("src", "");
    $("#sound4").attr("src", "");
    $("#sound5").attr("src", "");
    $("#sound6").attr("src", "");
    $("#sound7").attr("src", "");
    $("#sound8").attr("src", "");
});



$(".pad1").click(function() {
    $(".note1").fadeIn(500, function() {
        $(".note1").fadeOut(500);
    });
});
$(".pad2").click(function() {
    $(".note2").fadeIn(500, function() {
        $(".note2").fadeOut(500);
    });
});
$(".pad3").click(function() {
    $(".note3").fadeIn(500, function() {
        $(".note3").fadeOut(500);
    });
});
$(".pad4").click(function() {
    $(".note4").fadeIn(500, function() {
        $(".note4").fadeOut(500);
    });
});
$(".pad5").click(function() {
    $(".note5").fadeIn(500, function() {
        $(".note5").fadeOut(500);
    });
});
$(".pad6").click(function() {
    $(".note6").fadeIn(500, function() {
        $(".note6").fadeOut(500);
    });
});
$(".pad7").click(function() {
    $(".note7").fadeIn(500, function() {
        $(".note7").fadeOut(500);
    });
});
$(".pad8").click(function() {
    $(".note8").fadeIn(500, function() {
        $(".note8").fadeOut(500);
    });
});


