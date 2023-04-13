var board = ["", "", "", "", "", "", "", "", ""];
var player = "X";
var result = document.getElementById("result");


function playerMove(box) {
	if (board[box - 1] == "") {
        
		board[box - 1] = player;
		document.getElementById(box).innerHTML = player;
        
		if (player == "X") {
			checkWinner();
			player = "O";
		} else {
			checkWinner();
			player = "X";
		}
        
		
	}
}

function checkWinner() {
	if (board[0] == player && board[1] == player && board[2] == player ||
	    board[3] == player && board[4] == player && board[5] == player ||
	    board[6] == player && board[7] == player && board[8] == player ||
	    board[0] == player && board[3] == player && board[6] == player ||
	    board[1] == player && board[4] == player && board[7] == player ||
	    board[2] == player && board[5] == player && board[8] == player ||
	    board[0] == player && board[4] == player && board[8] == player ||
	    board[2] == player && board[4] == player && board[6] == player) {
			result.innerHTML = player + " wins!";
			disableClick();
		} else if (!board.includes("")) {
			result.innerHTML = "It's a tie!";
			disableClick();
		}
	}  

function disableClick() {
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).onclick = null;
	}
}
