const Player = (number, letter) => {
return {number, letter}
}

const playerOne = Player('one', 'X');
const playerTwo = Player('two', 'O');

const gameBoard = (() => {
    let x
    let round = 0 

    const newGame = () => {
        document.getElementById("board").style.visibility = "visible"
        x = 1;
    }

    const checkForWin = () => {
        const one = document.getElementById("blockOne").innerHTML;
        const two = document.getElementById("blockTwo").innerHTML;
        const three = document.getElementById("blockThree").innerHTML;
        const four = document.getElementById("blockFour").innerHTML;
        const five = document.getElementById("blockFive").innerHTML;
        const six = document.getElementById("blockSix").innerHTML;
        const seven = document.getElementById("blockSeven").innerHTML;
        const eight = document.getElementById("blockEight").innerHTML;
        const nine = document.getElementById("blockNine").innerHTML;

        if (one == "X" && four == "X" && seven == "X" || two == "X" && five == "X" && eight == "X" || three == "X" && six == "X" && nine == "X" || one == "X" && two == "X" && three == "X" || four == "X" && five == "X" & six == "X" || seven == "X" && eight == "X" && nine == "X" || three == "X" && five == "X" && seven == "X" || one == "X" && five == "X" && nine =="X") {
            x = 0; 
            setTimeout(function(){ alert("Player One Wins!!!"); }, 200);
        }

        else if (one == "O" && four == "O" && seven == "O" || two == "O" && five == "O" && eight == "O" || three == "O" && six == "O" && nine == "O" || one == "O" && two == "O" && three == "O" || four == "O" && five == "O" & six == "O" || seven == "O" && eight == "O" && nine == "O" || three == "O" && five == "O" && seven == "O" || one == "O" && five == "O" && nine =="O") {
            x = 0; 
            setTimeout(function(){ alert("Player Two Wins!!!"); }, 200);
        }

        else if (round == 9) {
            x = 0; 
            setTimeout(function(){ alert("Sorry. It's a tie...."); }, 200);
        }

    }


    const editBlock = (block) => {
        let blankCheck = document.getElementById(block).innerHTML;
        if (x == 1 && blankCheck == ('')) {
            document.getElementById(block).innerHTML = ('X')
            round++
            x = 2
            checkForWin()
        }

        else if (x == 2 && blankCheck == ('')) {
            document.getElementById(block).innerHTML = ('O')
            round++
            x = 1
            checkForWin()
        }

    }    

    
    const reset = () => {
        x = 1;
        round = 0;
        document.getElementById("blockOne").innerHTML = ('');
        document.getElementById("blockTwo").innerHTML = ('');
        document.getElementById("blockThree").innerHTML = ('');
        document.getElementById("blockFour").innerHTML = ('');
        document.getElementById("blockFive").innerHTML = ('');
        document.getElementById("blockSix").innerHTML = ('');
        document.getElementById("blockSeven").innerHTML = ('');
        document.getElementById("blockEight").innerHTML = ('');
        document.getElementById("blockNine").innerHTML = ('');

    }

    return {
        reset,
        editBlock,
        newGame,
        checkForWin
    }

}) ();