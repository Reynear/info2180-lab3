document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = board.querySelectorAll("div");
    let moveCount = 0;
    cells.forEach((cell) => {
        cell.classList.add("square");
        cell.addEventListener("click", () => {
            if (cell.textContent) return;
            const symbol = moveCount % 2 === 0 ? "X" : "O";
            cell.textContent = symbol;
            cell.classList.add(symbol);
            moveCount += 1;
        });
    });
});
