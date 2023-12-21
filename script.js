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

