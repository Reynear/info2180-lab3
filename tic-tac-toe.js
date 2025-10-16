document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = board.querySelectorAll("div");
    cells.forEach((cell) => {
        cell.classList.add("square");
    });
});

