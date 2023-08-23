const myLibrary = [];
const library = document.querySelector("#library");

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const book1 = new Book("Smith, Joe", "I Like Apples", 52, false);
const book2 = new Book("Terry, Phil", "Peanut Butter Jelly Time", 93, false);
const book3 = new Book("Zendaya, Betty", "Spiderman Is Awesome", 37, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

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

/* for (let i = 0; i < myLibrary.length) */