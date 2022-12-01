let myLibrary = new Map();

let inputBook = document.querySelector(".inputBook");
let addBook = document.querySelector(".button--addBook");
let btnTitle = document.querySelector(".button--title");
let title = document.querySelector("#title");
let library = document.querySelector(".library");
let removeAll = document.querySelector(".button--removeAll");

let id = 0;

function Book(name) {
  // the constructor...
  this.name = name;
  this.status = false;
  this.bookID = id;
}

function addBookToLibrary(name) {
  const item = new Book(name);
  myLibrary.set(id, item);
  let card = document.createElement("button");
  card.classList.add("card");
  card.classList.add("card--notRead");

  let cardTitle = document.createElement("div");
  cardTitle.classList.add("title");
  cardTitle.innerText = name;
  card.appendChild(cardTitle);

  let read = document.createElement("div");
  read.innerText = "Mark as read";
  read.classList.add("read");

  card.appendChild(read);

  let remove = document.createElement("button");
  remove.classList.add("button--remove");
  remove.innerText = "X";
  remove.addEventListener("click", (event) => {
    myLibrary.delete(item.id);
    remove.parentNode.parentNode.removeChild(remove.parentNode);
  });
  card.appendChild(remove);

  card.addEventListener("click", (event) => {
    if (item.status == true) {
      card.classList.remove("card--read");
      item.status = false;
      card.classList.add("card--notRead");
      card.querySelector(".read").innerText = "Mark as read";
    } else {
      card.classList.remove("card--notRead");
      item.status = true;
      card.classList.add("card--read");
      card.querySelector(".read").innerText = "Mark not read";
    }
    event.stopPropagation();
  });
  library.appendChild(card);
  id += 1;
}

addBook.addEventListener("click", (event) => {
  if (addBook.textContent == "NEW BOOK") {
    inputBook.style.display = "flex";
    addBook.textContent = "HIDE";
    addBook.style.backgroundColor = "#FFAB91";
  } else {
    inputBook.style.display = "none";
    addBook.textContent = "NEW BOOK";
    addBook.style.backgroundColor = "#38cc77";
  }
});

btnTitle.addEventListener("click", (event) => {
  addBookToLibrary(title.value, myLibrary);
});

removeAll.addEventListener("click", (event) => {
  myLibrary = new Map();
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
});