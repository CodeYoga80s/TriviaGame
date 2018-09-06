//Need a theme
// have a background picture based on the theme.
// have an image for the start menu
    // the image should have a start button in the center and be superimposed on the background image

//  Once the start button is clicked, the timer begins and the questions appear.
    //The questions have buttons the user clicks on

//The game ends when the time is over or when the user clicks on the done button //

// when the timer is over, there is a message that reads 
        //  ALL DONE! //
        //  Correct Answers:x //
        //  Incorrect Answers: x //
        // Unanswered:x //



//****************coding considerations***************//


//*****Clicks******//
    //  Click for the start button to initialize the game//
    //  Click on each question //
    //  You can only click on one button //
            // Radio Button //
    // Each click needs to be associated with the correct answer //
    // when the click for the correct answer is cliked for each question, a score needs to be passed //

// ******** variables and functions*****//
    //  each question has a correct answer  //
    //  each correct answer needs to be recorded //


    
$(document).ready(function() {

$(".begin").on( "click", function() {
    document.getElementById("quizBody").style.visibility = "visible";
    // countdown();
    var timerId = setInterval(countdown, 1000);


    
  });

$("#submitScore").on( "click", function() {
check();
});


var timeLeft = 60;
var elem = document.getElementById('timer');    
// console.log(elem);

function countdown() {
    if (timeLeft === 0) {
      clearTimeout(timerId);
      alert("Time's Up!")
      check();
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  }

// });


function check() {

var question1 = document.triviaGame.question1.value;
var question2 = document.triviaGame.question2.value;
var question3 = document.triviaGame.question3.value;
var question4 = document.triviaGame.question4.value;
var question5 = document.triviaGame.question5.value;
var question6 = document.triviaGame.question6.value;
var question7 = document.triviaGame.question7.value;
var question8 = document.triviaGame.question8.value;

var correct = 0 ;



    if (question1 === "Comet"){
        correct++;
    }
    if (question2 === "San Francisco"){
        correct++;
    }
    if (question3 === "How rude"){
        correct++;
    }
    if (question4 === "Pam"){
        correct++;
    }
    if (question5 === "Becky"){
        correct++;
    }
    if (question6 === "Jesse and Joey"){
        correct++;
    }
    if (question7 === "One"){
        correct++;
    }
    if (question8 === "House of Comics"){
        correct++;
    }
    // console.log(correct);
    document.getElementById("quizBody").style.visibility = "hidden";
    document.getElementById("beginGame").style.visibility = "hidden";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = correct + " out of 8 correct.";


}

});







// console.log(document.getElementById("Q1O1").value);

// $("#beginGame").hide();


// $(".begin").on("click", function() {
//     console.log("You're the best");
//     // $(".beginGame").hide();
//     // document.getElementById("beginGame").style.visibility = "hidden";


//   });

