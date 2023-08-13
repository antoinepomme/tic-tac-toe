const boardContainer = document.getElementById("board");

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
                    markCell(boardCell.id);
                    display();
                });
            }
        }
    };

    return {display};
})();



gameboard.display();