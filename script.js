const mainContainer = document.getElementById("container");
const boardContainer = document.getElementById("board");
const resetButton = document.getElementById("reset-button");

//players - AI

const player = (name, mark) => {
    return {name, mark};
};

//

//gameboard

const gameboard = (() => {
    let board = [
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"]
    ];

    let turn = 1;
    let player1 = player('a', 'x');
    let player2 = player('b', 'o');

    const markCell = (cell) => {
        let mark = turn % 2 != 0 ? player1.mark : player2.mark;
        board[cell.charAt(0)][cell.charAt(2)] = mark;
        document.getElementById(cell).className = mark;
        turn++;
    };

    const getResult = () => {
        if ((board[0][0] === player1.mark && board [0][1] === player1.mark && board[0][2] === player1.mark) ||
         (board[1][0] === player1.mark && board [1][1] === player1.mark && board[1][2] === player1.mark) ||
         (board[2][0] === player1.mark && board [2][1] === player1.mark && board[2][2] === player1.mark) || 
         (board[0][0] === player1.mark && board [1][0] === player1.mark && board[2][0] === player1.mark) ||
         (board[0][1] === player1.mark && board [1][1] === player1.mark && board[2][1] === player1.mark) ||
         (board[0][2] === player1.mark && board [1][2] === player1.mark && board[2][2] === player1.mark) ||
         (board[0][0] === player1.mark && board [1][1] === player1.mark && board[2][2] === player1.mark) || 
         (board[0][2] === player1.mark && board [1][1] === player1.mark && board[2][0] === player1.mark)) {
            return "Player 1 wins !";
        } else if ((board[0][0] === player2.mark && board [0][1] === player2.mark && board[0][2] === player2.mark) ||
        (board[1][0] === player2.mark && board [1][1] === player2.mark && board[1][2] === player2.mark) ||
        (board[2][0] === player2.mark && board [2][1] === player2.mark && board[2][2] === player2.mark) || 
        (board[0][0] === player2.mark && board [1][0] === player2.mark && board[2][0] === player2.mark) ||
        (board[0][1] === player2.mark && board [1][1] === player2.mark && board[2][1] === player2.mark) ||
        (board[0][2] === player2.mark && board [1][2] === player2.mark && board[2][2] === player2.mark) ||
        (board[0][0] === player2.mark && board [1][1] === player2.mark && board[2][2] === player2.mark) || 
        (board[0][2] === player2.mark && board [1][1] === player2.mark && board[2][0] === player2.mark)) {
            return "Player 2 wins !";
        } else if (turn == 10) {
            return "Tie";
        } else {
            return 0;
        }
    };

    const reset = () => {
        board = [
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"],
            ["empty", "empty", "empty"]
        ];
        turn = 1;
        display();
    };

    const displayResult = (result) => {
        const resultScreen = document.createElement("div");
        resultScreen.className = "result-screen";
        resultScreen.textContent = result;
        document.body.append(resultScreen);
        mainContainer.classList.toggle("blur");
        resultScreen.addEventListener('click', () => {
            mainContainer.classList.toggle("blur");
            document.body.removeChild(resultScreen);
            reset();
        });
    };

    const display = () => {
        while (boardContainer.firstChild) {
            boardContainer.removeChild(boardContainer.firstChild);
        }
        for (let i = 0; board[i]; i++) {
            for (let j = 0; board[i][j]; j++) {
                let boardCell = document.createElement("div");
                boardCell.id = i + "," + j;
                boardCell.className = board[i][j];
                boardContainer.append(boardCell);
                boardCell.addEventListener('click', () => {
                    if (boardCell.className === "empty") {
                        markCell(boardCell.id);
                    }
                    display();
                });
            }
        }
        if (getResult()) {
            displayResult(getResult())
        }
 
    };

    return {display, reset};
})();

resetButton.addEventListener('click', () => {
    gameboard.reset();
});

gameboard.display();