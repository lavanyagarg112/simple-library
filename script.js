let myLibrary = [];

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

function addbooktodiv(book) {
    if (book.title !== ""){
        const card = document.createElement("div")
        const title = document.createElement("h4")
        title.textContent = "Title: " + book.title;
        const author = document.createElement("p")
        author.textContent = "Author: " + book.author;
        const pages = document.createElement("p")
        pages.textContent = "Number of Pages: " + book.pages;
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        const btn = document.createElement("button");
        let message = "";
        if (book.read){
            message = "Read"
            btn.style = "background-color: lightgreen;"
        } else {
            message = "Not read yet"
            btn.style = "background-color: lightpink;"
        }
        btn.textContent = message;
        card.appendChild(btn);

        btn.addEventListener("click", () => {
            if (btn.textContent === "Read"){
                btn.textContent = "Not Read Yet";
                btn.style = "background-color: lightpink;";
            } else {
                btn.textContent = "Read";
                btn.style = "background-color: lightgreen;";
            }
        });

        const del = document.createElement("button");
            del.textContent = "Delete"
            del.style = "background-color: red; color: white; margin-left: 5px;"
            card.appendChild(del);

            del.addEventListener("click", () => {
                const thistitle = book.title;
                myLibrary = myLibrary.filter(book => book.title !== thistitle);
                removeAllChildElements(bookarea);
                showall();
            })

        card.style = "background-color: wheat; border: 2px solid black; padding: 8px; margin: 10px;"
        bookarea.appendChild(card)
    }

}


function showall(){
    const liblen = myLibrary.length;
    for (let i = 0; i < liblen; i++){
        
        addbooktodiv(myLibrary[i]);
        
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
        addbooktodiv(newBook);
        
        // Clear the form fields
        myForm.reset();
        dialog.close();
        
        // removeAllChildElements(bookarea);
        // showall();

    });


}

addnewbook.addEventListener('click', newbookclick);
