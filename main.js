const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPage = document.querySelector('.book-page');
const bookReadCheckBox = document.querySelector('.book-read-checkbox');
const addBookBtn= document.querySelector('.add-book-btn');
const readOrNot = document.querySelector('.read-or-not');
const removeBookBtn = document.querySelector('remove-book');
//the objects
let bookList = [{
    title: "test",
    author: "test",
    page: "test",
    read: false
},
]

//the constructor
function bookInfo(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
    this.sayEverything = function () {
        console.log(title);
        console.log(author);
        console.log(pages);
        // console.log(read);
    }
};


//add book to library
function addBookToLibrary () {
    addBookBtn.addEventListener('click', () => {
        if (!bookTitle.value || !bookAuthor.value || !bookPage.value){
            console.log("no information submitted")
        } else if (bookTitle.value && bookAuthor.value && bookPage.value){
            console.log("information submitted!")
            let submittedTitle = bookTitle.value;
            let submittedAuthor = bookAuthor.value;
            let submittedPage = bookPage.value;
            
            console.log(submittedTitle);
            console.log(submittedAuthor);
            console.log(submittedPage);

            const books = new bookInfo(`${submittedTitle}`,`${submittedAuthor}`, `${submittedPage}`);
            books.sayEverything();
        }
    })
};
addBookToLibrary()







// const newBook = new library('harry', 'jk', '123')
// newBook.sayEverything();





//searches through bookList object/*array*
function goThroughBooks(){
    for (let i = 0; i < bookList.length; i++){
        // console.log(bookList)//Array(3) [ {…}, {…}, {…} ]
        // console.log(bookList[i]) //Object { title: "test", author: "test", page: "test", read: false }
    }
}
goThroughBooks();

//make it start with empty input because it keeps saving previous text
window.addEventListener('DOMContentLoaded',()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPage.value = "";
    //make read checkbox unchecked later
})


