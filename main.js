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
function books() {

};
books();

//add book to library
function addBookToLibrary () {
    addBookBtn.addEventListener('click', () => {
        if (!bookTitle.value || !bookAuthor.value || !bookPage.value){
            console.log("no information submitted")
        } else if (bookTitle.value && bookAuthor.value && bookPage.value){
            console.log("information submitted!")
        }
    })
};
addBookToLibrary();

//searches through bookList object/*array*
function goThroughBooks(){
    for (let i = 0; i < bookList.length; i++){
        console.log(bookList)//Array(3) [ {…}, {…}, {…} ]
        console.log(bookList[i]) //Object { title: "test", author: "test", page: "test", read: false }
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
