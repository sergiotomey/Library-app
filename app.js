let bookDiv = document.querySelector('.book-div')

const myLibrary = []

function Book(title,author,numberOfPages,read){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.read = read
}



const modal = document.querySelector('.modal')
const openButton = document.querySelector('.add-book')
const closeButton = document.querySelector('.closeModal')


openButton.addEventListener('click', ()=>{
    modal.showModal();
})

closeButton.addEventListener('click', ()=>{
    event.preventDefault()
    let bookTitleInput = document.querySelector(".book-title")
    let bookAuthorInput = document.querySelector(".book-author")
    let bookPageInput = document.querySelector(".page-number")
    let bookTitle = bookTitleInput.value;
    let bookAuthor = bookAuthorInput.value;
    let bookNumber = bookPageInput.value;
    let bookReadInput = document.querySelector('.read')

function isBookRead(){
    if(bookReadInput.checked){
        return 'Read'
    }else{
        return 'Not read'
    }
}
    let bookRead = isBookRead()


    let newBook = new Book(bookTitle,bookAuthor,bookNumber,bookRead)
    myLibrary.push(newBook)
    writeBook()
    bookTitleInput.value = ''
    bookAuthorInput.value = ''
    bookPageInput.value = ''
    bookReadInput.checked = false
    modal.close();
} )


function writeBook(){
    bookDiv.innerHTML = ""

    myLibrary.forEach(function(book){
    let bookCard = document.createElement('div')
    let bookTitle = document.createElement('h2')
    let bookAuthor = document.createElement('p')
    const bookNumberOfPages = document.createElement('p');
    const bookRead = document.createElement('p');
    const readButton = document.createElement('button')
    const deleteButton = document.createElement('button')
        bookTitle.textContent = book.title
        bookAuthor.textContent = 'Author: ' + book.author
        bookNumberOfPages.textContent = 'Number of Pages: ' + book.numberOfPages
        bookRead.textContent = 'Read: ' + book.read
        readButton.textContent = 'Toggle read'
        deleteButton.textContent = 'Delete'

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookNumberOfPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(readButton);
    bookCard.appendChild(deleteButton);
    bookDiv.appendChild(bookCard)
    
    bookDiv.classList.add('card-div')
    bookCard.classList.add('book-card')


    readButton.addEventListener('click', ()=>{
        if(book.read == 'Read'){
            book.read = 'Not Read'
        }else{
            book.read = 'Read'
        }
        writeBook()
    })

    deleteButton.addEventListener('click', ()=>{
        const index = myLibrary.indexOf(book);
        if(index !== -1){
            myLibrary.splice(index,1)
        }
        writeBook()
    }
    )

    })
}

