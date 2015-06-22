function init(){
	$(".hint").text("");
	$(".remaining-guesses").text("You have 5 remaining guesses.");
	//console.log(response);
	var answer = Math.floor(Math.random()*99+1);
	var remainingGuesses = 5;
	var response = "";
	var input ="";
	$("#show-answer").click(function(){
			$(".remaining-guesses").text(answer);
			//$(".remaining-guesses").text(answer)
	});
	$(".submit-button").click(function(event){
		//if($(".class")[0].val())
		input = $(".response").val();
		console.log(input);
		if (input<=100&&input>=1){
			if(input == answer){
				response = "You guessed it right! The number is "+answer;
			} else {
				remainingGuesses = remainingGuesses-1;
				((function(){
					if(Math.abs(input - answer)>25){
						response = input+" is ice cold. ";
					} else{
						response = input+" is warm. ";
					}
				})());
				((function(){
					if ((input-answer) >0){
						response = response + "Go Lower.";
					} else {
						response = response + "Go Higher.";
					}
				})());
			}

		} else {
			response = "Input a number 1 through 100.";
		}
		//console.log(response);
		event.preventDefault();
		$(".hint").text(response);
		if(remainingGuesses>0){
			$(".remaining-guesses").text("You have "+remainingGuesses+" remaining guesses.");
		} else {
			$(".remaining-guesses").text("You are done!");
		}
		$(".response").val("");
	});
}

init();

$("#reset").click(function(){
	init();
});
