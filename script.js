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

function removeAllChildElements(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Call the function to remove all child elements.
removeAllChildElements(bookarea);


function showall(){
    const liblen = myLibrary.length;
    for (let i = 0; i < liblen; i++){
        if (myLibrary[i].title !== ""){
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
}

showall();

const addnewbook = document.querySelector(".newbook");
const dialog = document.querySelector("dialog");

function newbookclick(){
    dialog.showModal();

    const myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Retrieve form values
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = parseInt(document.getElementById("pages").value);
        const read = document.getElementById("read").checked;
        
        // Create a new book object
        const newBook = new Book(title, author, pages, read);
        
        // Add the new book to your library
        addBookToLibrary(newBook);
        
        // Clear the form fields
        myForm.reset();
        dialog.close();
        removeAllChildElements(bookarea);
        console.log(myLibrary)
        showall();

    });


}

addnewbook.addEventListener('click', newbookclick);
