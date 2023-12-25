const myLibrary = [];

function Book(title, author="", pages="", read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        output = title + " by " + author + ", " + pages + " pages, ";
        if(read) {
            output += "finished reading";
            return output;
        } else {
            output += "not read yet";
            return output;
        }
        
    }
}

function addLibrary() {
    // displays the library and adds functionality to delete buttons
    const ul = document.querySelector("ul");
    myLibrary.forEach((book) => {
        const newItem = document.createElement("li");
        const bookBtn = document.createElement("button");
        const bookSpan = document.createElement("span");

        bookBtn.textContent = "Delete";
        bookBtn.type = "button";
        bookBtn.classList.add("deleteBtn");
        newItem.appendChild(bookBtn);

        bookSpan.textContent = book.info();
        bookSpan.classList.add("bookInfo");
        newItem.appendChild(bookSpan);

        ul.appendChild(newItem);

        // add event listener to the delete button
        bookBtn.addEventListener("click", () => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            resetLibrary();
            addLibrary();
            console.log(myLibrary);
        })
    })
}

function resetLibrary() {
    // resets the books displayed on index.html
    document.querySelectorAll("li").forEach((item) => {
        item.remove();
    })
}





function main() {
    // initialize 2 books into myLibrary
    const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowlings", 10, false);
    myLibrary.push(book1);

    const book2 = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowlings", 12, true);
    myLibrary.push(book2);

    addLibrary();

    // Adds ability to reset library to reset-library button
    const resetLibraryBtn = document.querySelector("#reset-library");
    resetLibraryBtn.addEventListener("click", resetLibrary);

    // Adds ability to display library to add-library button
    const addLibraryBtn = document.querySelector("#add-library");
    addLibraryBtn.addEventListener("click", () => {
    addLibrary();
    })

    // Adding dialog to add books
    const dialog = document.querySelector("dialog");
    const openDialogBtn = document.querySelector("#open-dialog-btn");
    const closeDialogBtn = document.querySelector("#close-btn");
    const addBookBtn = document.querySelector("#add-book-btn");
    

    // show dialog
    openDialogBtn.addEventListener("click", () => {
        dialog.showModal();
    })

    // close dialog
    closeDialogBtn.addEventListener("click", () => {
        dialog.close();
    })

    // submit book

    addBookBtn.addEventListener("click", (event) => {
        // check if the input fields are non-empty

        const title = document.querySelector("#book-title");
        const author = document.querySelector("#book-author");
        const pages = document.querySelector("#book-pages");
        const read = document.querySelector("#book-read");

        if(title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
            const title = document.querySelector("#book-title").value;
            const author = document.querySelector("#book-author").value;
            const pages = +document.querySelector("#book-pages").value;
            var readBool = false;
            if(read.value == "Yes") {
                readBool = true;
            }
            const book = new Book(title.value, author.value, +pages.value, readBool);
            myLibrary.push(book);
            resetLibrary();
            addLibrary();
            dialog.close();
        } else {
            if(title.checkValidity()) {
                title.nextElementSibling.style.color = "#fff";
            } else {
                title.nextElementSibling.style.color = "red";
            }
            if(author.checkValidity()) {
                author.nextElementSibling.style.color = "#fff";
            } else {
                author.nextElementSibling.style.color = "red";
            }
            if(pages.checkValidity()) {
                pages.nextElementSibling.style.color = "#fff";
            } else {
                pages.nextElementSibling.style.color = "red";
            }
        }
    })
}

main();