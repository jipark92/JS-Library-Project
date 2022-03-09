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

            const books = new Book(`${submittedTitle}`,`${submittedAuthor}`, `${submittedPage}`);
        }
    })
};
addBookToLibrary()

//go through array and add based on the array index to html display
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

            const createPFour = document.createElement('p');
            createPFour.setAttribute('class', 'read-text');
            addedBookInfo.appendChild(createPFour);
            createPFour.textContent = "Read";

            const readNotBtn = document.createElement('button');
            readNotBtn.setAttribute('class', 'read-or-not');
            addedBookInfo.appendChild(readNotBtn);
            readNotBtn.textContent = "Not Read";

            const removeBookBtns = document.createElement('button');
            removeBookBtns.setAttribute('class', 'remove-book');
            addedBookInfo.appendChild(removeBookBtns);
            removeBookBtns.textContent = "Remove";

            //toggle for read book or not read book status
            readNotBtn.addEventListener('click', ()=>{
                if (createPFour.textContent === "Read"){
                    createPFour.textContent = "Not Read"
                } else {
                    createPFour.textContent = "Read"
                }
            });
            
            //remove add-added-book and all its children
            removeBookBtns.addEventListener('click', ()=> {
                addedBookInfo.remove();
            });



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


