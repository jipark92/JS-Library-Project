const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPage = document.querySelector('.book-page');
const bookReadCheckBox = document.querySelector('.book-read-checkbox');
const addBookBtn= document.querySelector('.add-book-btn');
const bookInfoContainer = document.querySelector('.book-info-container');

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
    // console.log(`${title} by ${author}, ${page} pages, not read yet`);
    myLibrary.push({title,author,page});
    goThroughBooks(title,author,page);
};

//add book to library
function addBookToLibrary () {
    addBookBtn.addEventListener('click', () => {
        if (!bookTitle.value || !bookAuthor.value || !bookPage.value || !bookReadCheckBox){
            console.log("no information submitted");
        } else if (bookTitle.value && bookAuthor.value && bookPage.value && bookReadCheckBox){
            console.log("information submitted!");
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

//go through array and add based on the index to html display
function goThroughBooks(title,author,page){
    for (let i = 0; i < myLibrary.length; i++){

            const addedBookInfo = document.createElement('div');
            addedBookInfo.setAttribute('class', 'added-book-info');
            bookInfoContainer.appendChild(addedBookInfo);
            
            const createPOne = document.createElement('p');
            createPOne.setAttribute('class', 'title-text');
            addedBookInfo.appendChild(createPOne);
            createPOne.textContent = title;

            const createPTwo = document.createElement('p');
            createPTwo.setAttribute('class', 'author-text');
            addedBookInfo.appendChild(createPTwo);
            createPTwo.textContent = author;

            const createPThree = document.createElement('p');
            createPThree.setAttribute('class', 'page-text');
            addedBookInfo.appendChild(createPThree);
            createPThree.textContent = page;

            const readNotBtn = document.createElement('button');
            readNotBtn.setAttribute('class', 'read-or-not');
            addedBookInfo.appendChild(readNotBtn);
            readNotBtn.textContent = "Not Read";

            const removeBookBtns = document.createElement('button');
            removeBookBtns.setAttribute('class', 'remove-book');
            addedBookInfo.appendChild(removeBookBtns);
            removeBookBtns.textContent = "Remove";

        // console.log(myLibrary.length)
        // console.log(myLibrary)//Array(3) [ {…}, {…}, {…} ]
        // console.log(myLibrary[i]) //Object { title: "test", author: "test", page: "test", read: false }
    }
};

//make it start with empty input because it keeps saving previous text after refresh
window.addEventListener('DOMContentLoaded',()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPage.value = "";
    //make read checkbox unchecked later
});


