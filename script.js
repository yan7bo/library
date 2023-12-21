const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        output = title + " by " + author + ", " + pages + " pages, ";
        if(read) {
            output += "finished reading";
            console.log(output);
            return output;
        } else {
            output += "not read yet";
            console.log(output);
            return output;
        }
        
    }
}

function addLibrary(myLibrary) {
    const ul = document.querySelector("ul");
    myLibrary.forEach((book) => {
        const newItem = document.createElement("li");
        newItem.textContent = book.info();
        ul.appendChild(newItem);
    })
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowlings", 10, false);
myLibrary.push(book1);

const book2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowlings", 12, true);
myLibrary.push(book2);

console.log(myLibrary);
addLibrary(myLibrary);