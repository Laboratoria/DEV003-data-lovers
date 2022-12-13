import { getBooks } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/harrypotter/data.js";

//console.log(example, data);
//const books = getBooks(data)
//console.log(data);
//console.log(books);
const showBooks = () => {
  const books = getBooks(data);
  const booksContainer = document.getElementById("booksContainer");


  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const modalContainer = document.createElement("div");
    const modalCloseBtn = document.createElement("button");
    const modalTitle = document.createElement("h3");
    const modalDescription = document.createElement("p");
    const modalAuthor = document.createElement("span");
    const modalReleaseDay = document.createElement("span");
    const section = document.createElement("section");
    const newFaceFront = document.createElement("div");
    const bookTitle = document.createElement("h3");

    modalContainer.className = "modal";
    modalCloseBtn.className = "modal-btn";
    modalCloseBtn.innerText = "Close";
    modalContainer.style.display = "none";
    modalTitle.innerText = book.title;
    modalDescription.innerText = book.description;
    modalAuthor.innerText = book.author;
    modalReleaseDay.innerText = book.releaseDay;
    section.className = "books";
    newFaceFront.className = "facefront";
    bookTitle.innerText = book.title;

    booksContainer.appendChild(section);
    section.appendChild(newFaceFront);
    newFaceFront.appendChild(bookTitle);
    modalContainer.appendChild(modalTitle);
    modalContainer.appendChild(modalDescription);
    modalContainer.appendChild(modalAuthor);
    modalContainer.appendChild(modalReleaseDay);
    booksContainer.appendChild(modalContainer);
    modalContainer.appendChild(modalCloseBtn);

    section.addEventListener("click", function () {
      modalContainer.style.display = "block";
    })
    modalCloseBtn.addEventListener("click", function () {
      modalContainer.style.display = "none";
    })
  }
}

if (location.pathname === '/pages/libros') {
  showBooks()
}
