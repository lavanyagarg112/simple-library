const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function init() {
    const book1 = new Book("And then there were none", "Agatha Christie", 272, true);
    const book2 = new Book("Flowers for Algernon", "Daniel Keyes", 311, false);
    addBookToLibrary(book1);
    addBookToLibrary(book2);
}

init();

const bookarea = document.querySelector(".books");

function showall(){
    const liblen = myLibrary.length;
    for (let i = 0; i < liblen; i++){
        const card = document.createElement("div")
        const title = document.createElement("h4")
        title.textContent = "Title: " + myLibrary[i].title;
        const author = document.createElement("p")
        author.textContent = "Author: " + myLibrary[i].author;
        const pages = document.createElement("p")
        pages.textContent = "Number of Pages: " + myLibrary[i].pages;
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.style = "background-color: wheat; border: 2px solid black; padding: 8px; margin: 10px;"
        bookarea.appendChild(card)
    }
}

showall();

const addnewbook = document.querySelector(".newbook");

function newbookclick(){

}

addnewbook.addEventListener('click', newbookclick);