let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    let newBookform = document.querySelector("#new-book-form");
    newBookform.style.display = "block";

})

document.querySelector("#new-book-form").addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
})