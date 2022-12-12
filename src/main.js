import { getBooks } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from "./data/harrypotter/data.js";

//console.log(example, data);
// const books = getBooks(data)
// console.log(data);
// console.log(books);
const showBooks = () => {
  const books = getBooks(data);
  const booksContainer = document.getElementById("librosContenedor");

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    booksContainer.innerHTML +=
      "<section class='libros'>" +
        "<div class='facefront'>" +
          "<img src='../imagenes/Harry_Potter_y_el_Misterio_del_Pr3Fol.PNG.webp' alt=''>" +
          "<h3>" + book.title + "</h3>" +
        "</div>" +
      "</section>";
  }
}

if (location.pathname === '/pages/libros') {
  showBooks()
}
