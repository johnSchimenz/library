// Global variables
const myLibrary = [];

// Book constructor
function Book(authorFirstName, authorLastName, title, pages, read) {
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// Adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Current list of books added to library
const book1 = new Book("Joe", "Smith", "I Like Apples", 52, false);
const book2 = new Book("Phil", "Terry", "Peanut Butter Jelly Time", 93, false);
const book3 = new Book("Betty", "Zendaya", "Spiderman Is Awesome", 37, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// Displays the books added to the library
const library = document.querySelector("#library");

function updateLibrary() {
    for (let i = 0; i < myLibrary.length; i++)
    {
        const displayBookInfo = document.createElement("div");
        displayBookInfo.textContent = myLibrary[i].authorLastName 
            + ", "
            + myLibrary[i].authorFirstName
            + " - "
            + myLibrary[i].title 
            + " - " 
            + myLibrary[i].pages
            + " - "
            + myLibrary[i].read;
        library.appendChild(displayBookInfo);
    }
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
    const getRead = document.querySelector("#read");

    
    const newLastName = getLastName.value;
    const newFirstName = getFirstName.value;
    const newTitle = getTitle.value;
    const newPages = getPages.value;
    const newRead = getRead.value;

    const newBook = new Book(newLastName, newFirstName, newTitle, newPages, newRead);
    addBookToLibrary(newBook);
    updateLibrary(newBook);

    interactWithAddNewBookModal.close();
})
