
$(document).ready (function() {
//Global variables
var questionBank = [];
var randomAnswer;
var randomQuestion;
var displayRandomAnswer;
var answers = [];
var currentQuestion;
var correctGuess = 0;
var incorrectGuess = 0;
var questionTimeInterval;
var timerCount = 20;


//Test Question Object
var Q1 = {
	question: "How old is Katie?",
	answer: "26",
	answerChoices: ["26","32","34","56"],
}
questionBank.push(Q1);

var Q2 = {
	question: "What is the dog's name?",
	answer: "Chesney",
	answerChoices: ["Spot", "Wow", "What", "Chesney"]
}
questionBank.push(Q2);

var Q3 = {
	question: "What year was Kennedy assassinated?",
	answer: "1963",
	answerChoices: ["1963", "1949", "1971", "1981"]
}
questionBank.push(Q3);

var Q4 = {
	question: "September 11th 2001 was best known for...",
	answer: "the barbaric attacks of the U.S. government on it's own people through controlled demolition and high ranking powers to justify the invasions of Afghanistan and Iraq",
	answerChoices: ["a series of four coordinated terrorist attacks on the U.S. by the Islamic terrorist group al-Qaeda", 
	"the barbaric attacks of the U.S. government on it's own people through controlled demolition and high ranking powers to justify the invasions of Afghanistan and Iraq", 
	"Mexico's largest disaster in history.", "the release of bluebell's excellent custard flavored ice cream."]
}
questionBank.push(Q4);
// var Q5 = {
// 	question: 
// 	answer:
// 	answerChoices: 

// }
// questionBank.push(Q5);

// var Q6 = {
// 	question: 
// 	answer:
// 	answerChoices: 


// }
// questionBank.push(Q6);

// var Q7 = {
// 	question: 
// 	answer:
// 	answerChoices: 

// }
// questionBank.push(Q7);

// var Q8 = {
// 	question: 
// 	answer:
// 	answerChoices: 

// }
// questionBank.push(Q8);

// var Q9 = {
// 	question: 
// 	answer:
// 	answerChoices: 

// }
// questionBank.push(Q9);

// var Q10 = {
// 	question: 
// 	answer:
// 	answerChoices: 
// }
// questionBank.push(Q10);
//function to shuffle the elements inside and array

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

//Shuffle answer arrays
function shuffleAnswer () {
	shuffleArray(currentQuestion.answerChoices);
	console.log(currentQuestion.answerChoices);
};

//Add answers to divs and check answers on click
function populateAnswerDivs () {
	var letters = ["A", "B", "C", "D"];
	for (var i = 1; i <=4; i++) {
		$("#a" + i).text(currentQuestion.answerChoices[i - 1]);
	};
};

//Check to see if answers are correct upon click (Make this into a single function?)

$("#a1").click (function checkAnswer() {
		if ($("#a1").text() === currentQuestion.answer) {
				correctGuess ++;
				$("#correct").html("<h3 class='alert alert-success'> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
			}
			else {
				incorrectGuess ++;
				$("#correct").html("<h3> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3 class='alert alert-danger'> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
				// $("#a1").effect("highlight",{}, 1000).currentQuestion.answer;
				
			};
});

$("#a2").click(function checkAnswer() {
	
			if ($("#a2").text() === currentQuestion.answer) {
				correctGuess ++;
				$("#correct").html("<h3 class='alert alert-success'> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
			}
			else {
				incorrectGuess ++;
				$("#correct").html("<h3> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3 class='alert alert-danger'> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
				// $("#a2").effect("highlight",{}, 1000).currentQuestion.answer;
				
			};
});

$("#a3").click(function checkAnswer() {
		
			if ($("#a3").text() === currentQuestion.answer) {
				correctGuess ++;
				$("#correct").html("<h3 class='alert alert-success'> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
			}
			else {
				incorrectGuess ++;
				$("#correct").html("<h3> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3 class='alert alert-danger'> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
				// $("#a3").effect("highlight",{}, 1000).currentQuestion.answer;
				
			};
});

$("#a4").click(function checkAnswer() {
			if ($("#a4").text() === currentQuestion.answer) {
				correctGuess ++;
				$("#correct").html("<h3 class='alert alert-success'> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
			}
			else {
				incorrectGuess ++;
				$("#correct").html("<h3> Correct" + " " + correctGuess + "</h3>");
				$("#incorrect").html("<h3 class='alert alert-danger'> Incorrect:" + " " + incorrectGuess + "</h3>");
				resetGame();
				// $("#a3").effect("highlight",{}, 1000).currentQuestion.answer;
				
			};

});

function nextQuestion() {
	shuffleArray(questionBank);
	currentQuestion = questionBank[1];
	$(".question").html("<p>" + currentQuestion.question + "</p>");
	
	
};

var counter; //every second

function timer()
{
  timerCount--;
  if (timerCount <= 0)
  {
  	resetGame();
    return;
  }else {
		$("#questionTimer").html("<p>" + "" + timerCount + "</p>");
	}
}

// function questionTimer () {

// 	if (timerCount === 0) {
// 		timerCount = 10;
// 		nextQuestion();
// 		reset();
// 	}
// 	else {
// 		$("#questionTimer").html("<p> Time Remaining:" + "" + timerCount + "</p>");
// 		timerCount --;
// 	}
// };

function resetGame () {	
	clearInterval(counter);
	timerCount = 20;
	counter = setInterval(timer, 1000);
	nextQuestion();
	shuffleAnswer();
	populateAnswerDivs();

};

// function displayIncorrect () {
//     $("#a1").addClass("changeColor");
//     $("#a2").addClass("changeColor");
//     $("#a3").addClass("changeColor");
//     $("#a4").addClass("changeColor");
// }; 
//Get Question and answers from question bank to display 

resetGame();


});


//Counter to display correct and incorrect guesses

//Timer for each question
