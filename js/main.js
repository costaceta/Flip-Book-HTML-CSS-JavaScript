// References to DOM Elements
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const book = document.getElementById('book');

const paper1 = document.getElementById('p1');
const paper2 = document.getElementById('p2');
const paper3 = document.getElementById('p3');

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Businnes Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = "translateX(-180px)";
  nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {

  if(isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)"
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if(currentLocation < maxLocation) {
    switch(currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        closeBook();
        break;
      default:
        throw new Error("unkown state")
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if(currentLocation > 1) {
    switch(currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 3;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 2;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 1;
        openBook()
        break;
      default:
        throw new Error("unkown state")
    }
    currentLocation--;
  }
}