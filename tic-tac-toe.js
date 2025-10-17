const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = board.querySelectorAll("div");
	const status = document.getElementById("status");
    let moveCount = 0;
    let gameOver = false;
    
    cells.forEach((cell) => {
        cell.classList.add("square");
        cell.addEventListener("mouseover", () => {
            cell.classList.add("hover");
        });
        cell.addEventListener("mouseout", () => {
            cell.classList.remove("hover");
        });
        cell.addEventListener("click", () => {
			if (gameOver || cell.textContent) return;
            const symbol = moveCount % 2 === 0 ? "X" : "O";    
            cell.textContent = symbol;
            cell.classList.add(symbol);
            moveCount += 1;
			const won = winPatterns.some(([a,b,c]) => (
				cells[a].textContent === symbol &&
				cells[b].textContent === symbol &&
				cells[c].textContent === symbol
			));
			if (won) {
				status.textContent = `Congratulations! ${symbol} is the Winner!`;
				status.classList.add("you-won");
				gameOver = true;
			}
        });
    });
});
