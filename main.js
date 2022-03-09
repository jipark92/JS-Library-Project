const bookTitle = document.querySelector('.book-title');
const bookAuthor = document.querySelector('.book-author');
const bookPage = document.querySelector('.book-page');
const bookReadCheckBox = document.querySelector('.book-read-checkbox');
const addBookBtn= document.querySelector('.add-book-btn');
const bookInfoContainer = document.querySelector('.book-info-container');

//the object
let myLibrary = [];

//the constructor
function Book(title,author,page,read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    myLibrary.push({title,author,page,read});
    console.log(myLibrary)
    createHtml(title,author,page,read);
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
            let submittedCheck = bookReadCheckBox.checked;

            new Book(`${submittedTitle}`,`${submittedAuthor}`, `${submittedPage}`, `${submittedCheck}`);
            
        }
    })
};
addBookToLibrary();

//go through array and add based on the array index to html display
function createHtml(title,author,page){

        

        //create added book container
        const addedBookInfo = document.createElement('div');
        addedBookInfo.setAttribute('class', 'added-book-info');
        bookInfoContainer.appendChild(addedBookInfo);

        //set data attribute
        for (let i = 0; i < myLibrary.length; i++){
            addedBookInfo.setAttribute("id", myLibrary[i].title)
        }
        
        //create title text display
        const createPOne = document.createElement('p');
        createPOne.setAttribute('class', 'title-text');
        addedBookInfo.appendChild(createPOne);
        createPOne.textContent = title;

        //create author text display
        const createPTwo = document.createElement('p');
        createPTwo.setAttribute('class', 'author-text');
        addedBookInfo.appendChild(createPTwo);
        createPTwo.textContent = author;
        
        //create page number display
        const createPThree = document.createElement('p');
        createPThree.setAttribute('class', 'page-text');
        addedBookInfo.appendChild(createPThree);
        createPThree.textContent = page;

        //create read status text html elements
        const createPFour = document.createElement('p');
        createPFour.setAttribute('class', 'read-text');
        addedBookInfo.appendChild(createPFour);
        
        //create read status button
        const readNotBtn = document.createElement('button');
        readNotBtn.setAttribute('class', 'read-or-not');
        addedBookInfo.appendChild(readNotBtn);
        readNotBtn.textContent = "";

        //create read status display to button and status
        if (bookReadCheckBox.checked === true){
            createPFour.textContent = "Read";
            readNotBtn.textContent = "Not Read";
        } else {
            createPFour.textContent = "Not Read";
            readNotBtn.textContent = "Read";
        };

        //create remove button
        const removeBookBtns = document.createElement('button');
        removeBookBtns.setAttribute('class', 'remove-book');
        addedBookInfo.appendChild(removeBookBtns);
        removeBookBtns.textContent = "Remove";

        //make the book buttons works
        function bookButtons(){
            //change read status
            readNotBtn.addEventListener('click', ()=>{
                if (createPFour.textContent === "Read"){
                    createPFour.textContent = "Not Read"
                    readNotBtn.textContent = "Read";
                } else {
                    createPFour.textContent = "Read"
                    readNotBtn.textContent = "Not Read"
                }
            });

            

            // remove add-added-book and all its children
            removeBookBtns.addEventListener('click', ()=> {
                //remove added book container
                addedBookInfo.remove();
                //removes object in array
                // need to make ID and mylibrary.title connect then delete mylibrary object.
                for (let i = 0; i < myLibrary.length; i++){
                    let wee = addedBookInfo.getAttribute("id", myLibrary[i].title)
                    console.log(wee);


                    if(myLibrary[i].title === wee){
                        delete myLibrary[i].title;
                        delete myLibrary[i].author;
                        delete myLibrary[i].page;
                        delete myLibrary[i].read;


                    }


                    // let index = myLibrary.findIndex( element => {
                    //     if (element.title = `${wee}`) {
                    //       return true;
                    //     }
                    // });
                    // console.log('title is at index: ' + index);
                    
                }








              
            });
        }
        bookButtons();
};

//make it start with empty input because it keeps saving previous text after refresh
window.addEventListener('DOMContentLoaded',()=>{
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPage.value = "";
    //make read checkbox unchecked later
});