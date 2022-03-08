const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPage = document.querySelector('.book-page');
const bookReadCheckBox = document.querySelector('.book-read-checkbox');
const addBookBtn= document.querySelector('.add-book-btn');
const readOrNot = document.querySelector('.read-or-not');
const removeBookBtn = document.querySelector('remove-book');

//the object
let myLibrary = [];

//the constructor
function Book(title,author,page) {
    this.title = title;
    this.author = author;
    this.page = page;

    // this.read = read;
    // this.sayEverything = function () {
    //     console.log(title);
    //     console.log(author);
    //     console.log(page);
    //     // console.log(read);
    // }
    // console.log(this.title);
    // console.log(this.author);
    // console.log(this.pages);
    console.log(`${title} by ${author}, ${page} pages, not read yet`);
    myLibrary.push({title,author,page})
};





//add book to library
function addBookToLibrary () {
    addBookBtn.addEventListener('click', () => {
        if (!bookTitle.value || !bookAuthor.value || !bookPage.value || !bookReadCheckBox){
            console.log("no information submitted")
        } else if (bookTitle.value && bookAuthor.value && bookPage.value && bookReadCheckBox){
            console.log("information submitted!")
            let submittedTitle = bookTitle.value;
            let submittedAuthor = bookAuthor.value;
            let submittedPage = bookPage.value;
            
            // console.log(submittedTitle);
            // console.log(submittedAuthor);
            // console.log(submittedPage);

            const books = new Book(`${submittedTitle}`,`${submittedAuthor}`, `${submittedPage}`);
            // books.sayEverything();
            // console.log(books.title +' test')
        }
    })
};
addBookToLibrary()












//make it start with empty input because it keeps saving previous text after refresh
window.addEventListener('DOMContentLoaded',()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPage.value = "";
    //make read checkbox unchecked later
})


