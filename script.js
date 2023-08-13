const boardContainer = document.getElementById("board");

//gameboard

const gameboard = (() => {
    let board = [
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"],
        ["empty", "empty", "empty"]
    ];

    const display = () => {
        for (let i = 0; board[i]; i++) {
            for (let j = 0; board[i][j]; j++) {
                let boardCell = document.createElement("div");
                boardCell.className = board[i][j];
                boardContainer.append(boardCell);
            }
        }
    };

    return {display};
})();

gameboard.display();

//players - AI