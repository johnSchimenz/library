// Global variables
const myLibrary = [];

// Book constructor
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// Adds book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Current list of books added to library
const book1 = new Book("Smith, Joe", "I Like Apples", 52, false);
const book2 = new Book("Terry, Phil", "Peanut Butter Jelly Time", 93, false);
const book3 = new Book("Zendaya, Betty", "Spiderman Is Awesome", 37, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

// Displays the books added to the library
const library = document.querySelector("#library");

for (let i = 0; i < myLibrary.length; i++)
{
    const displayBookInfo = document.createElement("div");
    displayBookInfo.textContent = myLibrary[i].author + " - " 
        + myLibrary[i].title 
        + " - " 
        + myLibrary[i].pages
        + " - "
        + myLibrary[i].read;
    library.appendChild(displayBookInfo);
}

// Makes buttons work for adding new book

const openAddNewBookModal = document.querySelector("#add-new-book");
const interactWithAddNewBookModal = document.querySelector("#modal");
const submitNewBook = document.querySelector("#submit");

openAddNewBookModal.addEventListener("click", () => {
    interactWithAddNewBookModal.showModal();
})

submitNewBook.addEventListener("click", () => {
    interactWithAddNewBookModal.close();
})