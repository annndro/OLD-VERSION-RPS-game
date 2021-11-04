function computegame(){
	event.preventDefault();
	document.getElementById("game").style.display="none";	
	document.getElementById("2").addEventListener("click",userChoseRock);
	document.getElementById("1").addEventListener("click",userChosePaper);
	document.getElementById("3").addEventListener("click",userChoseScissors);
}
function userChoseRock(){
	var randomChoice=Math.floor(Math.random()*3+1);
	
	if (randomChoice==2){
		alert("Computer chose: ROCK");
		alert("it's a tie!");
		}
	else if (randomChoice==1){
		alert("Computer chose: PAPER");
		alert("sorry, you lose!");
		}
	else if (randomChoice==3){
		alert("Computer chose: SCISSORS");
		alert("you win!")
	}
}
function userChosePaper(){
	var randomChoice=Math.floor(Math.random()*3+1);
	
	if (randomChoice==1){
		alert("Computer chose: PAPER");
		alert("it's a tie!");
		}
	else if (randomChoice==3){
		alert("Computer chose: SCISSORS");
		alert("sorry, you lose!");
		}
	else if (randomChoice==2){
		alert("Computer chose: ROCK");
		alert("you win!");
		}	
		
}
function userChoseScissors(){
	var randomChoice=Math.floor(Math.random()*3+1);
	
	if (randomChoice==3){
		alert("Computer chose: SCISSORS");
		alert("it's a tie!");
		}
	else if (randomChoice==2){
		alert("Computer chose: ROCK");
		alert("sorry, you lose!");
		}
	else if (randomChoice==1){
		alert("Computer chose: PAPER");
		alert("you win!");
		}	
		
}
