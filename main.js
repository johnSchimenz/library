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

// Displays the books added to the library and the delete button that goes with the book
const library = document.querySelector("#library");

function updateLibrary(book) {

    // Create book container
    const createBookContainer = document.createElement("div");
    createBookContainer.setAttribute("id", "idBookContainer" + counter);
    createBookContainer.classList.add("book-container");
    library.appendChild(createBookContainer);
    
    // Display book
    const displayBookInfo = document.createElement("div");
    displayBookInfo.setAttribute("id", "idBook" + counter);
    displayBookInfo.classList.add("book");
    displayBookInfo.textContent = book.authorLastName 
        + ", "
        + book.authorFirstName
        + " - "
        + book.title 
        + " - " 
        + book.pages
    createBookContainer.appendChild(displayBookInfo);

    // Display delete button
    const addDeleteButton = document.createElement("button");
    addDeleteButton.setAttribute("id", "idDeleteButton-" + counter);
    addDeleteButton.setAttribute("class", "delete");
    addDeleteButton.setAttribute("onclick", "removeBook(this)");
    addDeleteButton.textContent = "DELETE";
    displayBookInfo.appendChild(addDeleteButton);

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

// Makes "DELETE" buttons work
function removeBook(btn) {
    // Find id of DELETE button
    const clickedButtonId = btn.id;
    
    // Get the digit off end of the button's id
    const separatedDigit = clickedButtonId.split("-");
    const digitButtonId = separatedDigit[1];
    console.log(digitButtonId);

}

