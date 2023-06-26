//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    puzzlePieceDiv = document.querySelector(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");

// store the dragged piece in a golbal variable we will need it in the handleDrop function
//  let draggedPiece;

//console.log(theButtons);
//console.log(puzzleBoard);

function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');

    // bug fix 2 will go here, will use a foreach loop and if statement 
    // i want to loop through dropzones and check if there is a puzzle
    // check with firstchild
    // if there is a child puzzlepiecediv.appendchild(something needs to go here) 
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
}

function handleStartDrag(e) {
   // console.log("Started dragging this piece:", this)
//    draggedPiece = this;
// using set data instead of a global variable 
    e.dataTransfer.setData('draggedEl',this.id);
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour , e is a short for event, could be e, evt as well
    console.log("Dragged Over piece");

}

function handleDrop(e) {
    e.preventDefault();
    console.log("Dropped Piece");
   
  
    // this line moves the dragged piece from the left side of the board into whatever dropzone we choose
    // bugfix1 will go here

    // could also check if there is any drop piece present or not
    if (this.children.length >=1 ) {
       return; 
    }

    let droppedId = e.dataTransfer.getData('draggedEl');
    console.log(droppedId);
    //this.appendChild(document.querySelector('#${droppedId}'));

}



//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop",handleDrop));