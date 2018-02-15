//JS code goes here

var turn = false;
var lastID = null;
var n = 0;
var block = [];
var winner = null;
var player1w = 0;
var player1l = 0;
var player2w = 0;
var player2l = 0;

function play(event , id) {


	if(!event.target.innerText && !winner &&  n!= 9){
		event.target.innerText = turn? "O": "X";
		turn = !turn;
		lastID = event.target.innerText;
		n++;


	if(n >= 5){
		for (var i = 0; i < 9; i++) {
				block[i] = document.getElementById(i).innerText;
			}

			if ((block[0]==block[1] && block[1]==block[2] && block[0]!="") || (block[3]==block[4] && block[4]==block[5] && block[3]!="") || (block[6]==block[7] && block[7]==block[8] && block[6]!="") || (block[0]==block[3] && block[3]==block[6] && block[0]!="") || (block[1]==block[4] && block[4]==block[7] && block[1]!="") || (block[2]==block[5] && block[5]==block[8] && block[2]!="") || (block[0]==block[4] && block[4]==block[8] && block[0]!="") || (block[2]==block[4] && block[4]==block[6] && block[2]!="")) {
				winner = lastID;
			}
	}

	if(winner == "X"){
		document.getElementById("status").innerText="Congrats Player 1 !! You are the  Winner!";
		player1w++;
		player2l++;
		document.getElementById("wCount1").innerText=player1w;
		document.getElementById("lCount1").innerText=player2l;
	}
	else if (winner == "O"){
		document.getElementById("status").innerText="Congrats Player 2 !! You are the  Winner!";
		player1l++;
		player2w++;
		document.getElementById("wCount2").innerText=player2w;
		document.getElementById("lCount2").innerText=player1l;
	}

	if(n == 9){
		document.getElementById("status").innerText="Draw Game";
	}
}
}

function reset(event){
	turn = false;
	lastID = null;
	n = 0;
	winner = null;
	document.getElementById("status").innerText="New Game";
	for (var i = 0; i < 9; i++) {
		document.getElementById(i).innerText = "";
		block[i] = "";
	}

}
