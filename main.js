const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPage = document.querySelector('.book-page');
const bookReadCheckBox = document.querySelector('.book-read-checkbox');
const addBookBtn= document.querySelector('.add-book-btn');
const readOrNot = document.querySelector('.read-or-not');
const removeBookBtn = document.querySelector('remove-book');

const books = [{
    title: "test",
    author: "test",
    page: "test",
    read: false
}]

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