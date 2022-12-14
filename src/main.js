import { getBooks } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/harrypotter/data.js";

//console.log(example, data);
//const books = getBooks(data)
//console.log(data);//
//console.log(books);
const showModalBooks = (title, description, author, releaseDay) => {
  const modalContainer = document.getElementById("modalContainer");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalAuthor = document.getElementById("modalAuthor");
  const modalReleaseDay = document.getElementById("modalReleaseDay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  modalTitle.innerText = title;
  modalDescription.innerText = description;
  modalAuthor.innerText = author;
  modalReleaseDay.innerText = releaseDay;

  modalContainer.style.display = "flex"

  modalCloseBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
  })
}

const showBooks = () => {
  const books = getBooks(data);
  const booksContainer = document.getElementById("booksContainer");


  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const section = document.createElement("section");
    const bookTitle = document.createElement("h3");

    section.className = "card-book";
    bookTitle.innerText = book.title;
    bookTitle.className = "titulo"

    booksContainer.appendChild(section);
    section.appendChild(bookTitle);

    section.addEventListener("click", function () {
      showModalBooks(book.title, book.description, book.author, book.releaseDay);
    })
  }
}

if (location.pathname === '/pages/libros' || location.pathname === '/DEV003-data-lovers/pages/libros.html') {
  showBooks()
}


