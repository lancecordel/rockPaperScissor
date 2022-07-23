
//Assign dom elements to variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

//Assign score DOMs to variables
const yourScore = document.getElementById('yourScore');
const computerScore = document.getElementById('computerScore');

//Displays what you and the computer chose
const you = document.getElementById('yourChoice');
const computer = document.getElementById('computerChoice');

//Assign status DOM to a variable
const status = document.getElementById('status');

//Player turns left
const turnsLeftForPlayer = document.getElementById('yourTurnsLeft');

//Computer turns left
const turnsLeftForComputer = document.getElementById('computerTurnsLeft');

//ASSIGN reset DOM to variable
const reset = document.getElementById('reset');

//your Starting Score
let yourScoreInteger = 0;

//computer Starting Score
let computerScoreInteger = 0;

//Turns to win
const turns = 5;

//Initialize Turns left DOM to 'turns'
turnsLeftForPlayer.innerHTML = turns;
turnsLeftForComputer.innerHTML = turns;

//Increment score of winner
const winner = (you, computer) => {
	if(you === 'ROCK' && computer === 'SCISSOR' || 
		you === 'PAPER' && computer === 'ROCK' ||
		you === 'SCISSOR' && computer === 'PAPER'){
			//Increment your integer
			yourScoreInteger += 1;

			//calculate turns left for player before win
			let yourTurnsLeft = turns - yourScoreInteger;
		
			//Assign integer to 'yourScore' innerHTML value
			yourScore.innerHTML = yourScoreInteger;

			//Update turns left
			turnsLeftForPlayer.innerHTML = yourTurnsLeft;
			console.log('you win', yourTurnsLeft);
	}
	else if(you === computer){
		console.log('draw');
	} 
	else {
		//Increment computer integer
		computerScoreInteger += 1;

		//calculate turns left for computer before win;
		let computerTurnsLeft = turns - computerScoreInteger;

		//Assign integer to 'computerScore' innerHTML value
		computerScore.innerHTML = computerScoreInteger;

		//Set update turns left
		turnsLeftForComputer.innerHTML = computerTurnsLeft;
		console.log('you lose', computerTurnsLeft);
	}
}

//Game Over
const gameOver = () =>{
	if(yourScoreInteger === turns){
		//Set status innerHTML to 'WIN'
		status.innerHTML = '<span style="color: green;">' + 'YOU WIN!' + '</span>';
		console.log('GAME OVER YOU WIN')
		return;
	}
	if(computerScoreInteger === turns){
		//Set Staus innerHTML to 'LOSE'
		status.innerHTML = '<span style="color: red;">' + 'YOU LOSE!' + '</span>';
		console.log('GAME OVER YOU LOSE');
		return;
	}
}


//Event Listener for ROCK div
rock.addEventListener('click', (e) => {
	// Check if max 'turns' have been reached
	if(yourScoreInteger < turns && computerScoreInteger < turns){
		//Array for computer choices
		const choices = ['ROCK', 'PAPER', 'SCISSOR'];
		//Randomly generated number from 0 - 2 for computer choices
		const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

		//Change inner Div for 'yourChoice'
		you.innerHTML = 'ROCK';
		//Create another variable to pass as an argument in the 'winner' function. 
		let youChose = you.innerHTML = 'ROCK';
		//Change inner Div for 'computerChoice' to array index item
		computer.innerHTML = choices[computerChoice];
		let computerChose = computer.innerHTML = choices[computerChoice];

		//Call winner function and pass 'youChose' and 'computerChose' as arguments
		winner(youChose, computerChose);
		}

	// Call Game over function to check who reached 'turns' first;
	gameOver();
})


//Event Listener for PAPER div
paper.addEventListener('click', (e) => {
	if(yourScoreInteger < turns && computerScoreInteger < turns){
		const choices = ['ROCK', 'PAPER', 'SCISSOR'];
		const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

		you.innerHTML = 'PAPER';
		let youChose = you.innerHTML = 'PAPER';
		computer.innerHTML = choices[computerChoice];
		let computerChose = computer.innerHTML = choices[computerChoice];

		winner(youChose, computerChose);
	}

	gameOver()
})


//Event Listener for SCISSOR div
scissor.addEventListener('click', (e) => {
	if(yourScoreInteger < turns && computerScoreInteger < turns){
		const choices = ['ROCK', 'PAPER', 'SCISSOR'];
		const computerChoice = Math.floor(Math.abs(Math.random() * choices.length));

		you.innerHTML = 'SCISSOR';
		let youChose = you.innerHTML = 'SCISSOR';
		computer.innerHTML = choices[computerChoice];
		let computerChose = computer.innerHTML = choices[computerChoice];

		winner(youChose, computerChose);
	}

	gameOver();
})


//RESET all fields to continue playing
reset.addEventListener('click', (e) => {
	//set scores for 'you' and 'computer' back to zero
	yourScoreInteger = 0;
	computerScoreInteger = 0;

	//assign new value to innerHTML
	yourScore.innerHTML = yourScoreInteger;
	computerScore.innerHTML = computerScoreInteger;

	//reset turns left to original value
	turnsLeftForPlayer.innerHTML = turns;
	turnsLeftForComputer.innerHTML = turns;

	//reset status
	status.innerHTML = 'playing';

})
