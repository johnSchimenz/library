// Global variables
const myLibrary = [];
let counter = 0;

// Book constructor
function Book(authorFirstName, authorLastName, title, pages) {
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.title = title;
    this.pages = pages;
}

// Adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Displays the books added to the library
const library = document.querySelector("#library");

function updateLibrary(book) {
    const displayBookInfo = document.createElement("div");
    displayBookInfo.setAttribute("id", "idBook" + counter)
    displayBookInfo.textContent = book.authorLastName 
        + ", "
        + book.authorFirstName
        + " - "
        + book.title 
        + " - " 
        + book.pages
    library.appendChild(displayBookInfo);

    const addDeleteButton = document.createElement("button");
    addDeleteButton.setAttribute("id", "idDeleteButton" + counter);
    addDeleteButton.textContent = "Delete";
    library.appendChild(addDeleteButton);

    counter++;
}

// Makes buttons work for adding new book
const openAddNewBookModal = document.querySelector("#add-new-book");
const interactWithAddNewBookModal = document.querySelector("#modal");
const submitNewBook = document.querySelector("#submit");

openAddNewBookModal.addEventListener("click", () => {
    interactWithAddNewBookModal.showModal();
})

submitNewBook.addEventListener("click", (event) => {
    event.preventDefault();

    const getLastName = document.querySelector("#last-name-author");
    const getFirstName = document.querySelector("#first-name-author");
    const getTitle = document.querySelector("#title");
    const getPages = document.querySelector("#pages");

    
    const newLastName = getLastName.value;
    const newFirstName = getFirstName.value;
    const newTitle = getTitle.value;
    const newPages = getPages.value;

    const newBook = new Book(newFirstName, newLastName, newTitle, newPages);
    addBookToLibrary(newBook);
    updateLibrary(newBook);

    getLastName.value = "";
    getFirstName.value = "";
    getTitle.value = "";
    getPages.value = "";

    interactWithAddNewBookModal.close();
})

// Makes "CANCEL" button work
const closeAddNewBookModal = document.querySelector("#cancel")

closeAddNewBookModal.addEventListener("click", () => {
    interactWithAddNewBookModal.close();
})