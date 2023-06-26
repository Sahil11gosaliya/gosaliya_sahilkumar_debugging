// Variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
    dropZones = document.querySelectorAll(".drop-zone"),
    resetButton = document.querySelector("#resetBut");

// Store the dragged piece in a global variable; we will need it in the handleDrop function
let draggedPiece;



// Change the background image of the puzzle board
function changeBGImage() {
    const backgroundImage = `url(images/backGround${this.id}.jpg)`;
    puzzleBoard.style.backgroundImage = backgroundImage;

    puzzlePieces.forEach((piece, index) => {
        const originalPieceImage = piece.getAttribute('src');
        const newPieceImage = originalPieceImage.replace(/\d/g, this.id);
        piece.src = newPieceImage;
    });

    resetPuzzle();
}



// Handle the start of dragging a puzzle piece
function handleStartDrag() {
    draggedPiece = this;
}

// Handle the dragover event on drop zones
function handleDragOver(e) {
    e.preventDefault();
}

// Handle the drop event on drop zones
function handleDrop(e) {
    e.preventDefault();

    // Check if the drop zone is empty
    if (this.children.length === 0) {
        // Append the dragged piece to the drop zone
        this.appendChild(draggedPiece);
    }
}


function resetPuzzle() {
    // Reparent puzzle pieces back to the drag zone
    puzzlePieces.forEach(piece => {
        puzzlePieceDiv.appendChild(piece);
    });

    // Clear the drop zones
    dropZones.forEach(zone => {
        zone.innerHTML = '';
    });
}


// Event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
resetButton.addEventListener('click', resetPuzzle);











