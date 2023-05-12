// const heading=document.getElementById("h1");
// const node=document.createTextNode("MY WEBCODE TASK");
// heading.appendChild(node);

// const para=document.getElementById("p");
// const node1=document.createTextNode("Displaying The Output For The given API");
// para.appendChild(node1);

// async function fetchBooks() {
//     const [BooksResponse] = await Promise.all([
//       fetch('https://www.anapioficeandfire.com/api/books'),
//     ]);
  
//     const Books = await BooksResponse.json();
//    console.log(Books);
//    document.getElementById("").innerHTML=Books.map(BooksResponse);
//   //   for(var i=0;i<Books.length;i++){
//   //     console.log(Books[i].name);
//   //     console.log(Books[i].isbn);
//   //     console.log(Books[i].numberOfPages);
//   //     console.log(Books[i].authors);
//   //     console.log(Books[i].publisher);
//   //     console.log(Books[i].released);
      
//   // }
    
//   // for(var i=5;i>Books.length;i--){
//   //   console.log(Books[i].characters);
//   // }
//   //   return [Books];
//   }
  
//   fetchBooks().then(([Books]) => {
//     Books;
//   }).catch(error => {
    
//   });
const bookList = document.getElementById("book-list");
   const searchInput = document.getElementById("search-input");
   const searchButton = document.getElementById("search-button");

   async function fetchBooks() {
     const response = await fetch("https://www.anapioficeandfire.com/api/books");
     const data = await response.json();
     return data;
   }
   async function displayBooks(searchTerm = "") {
    const books = await fetchBooks();
    let filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()));
    let bookListHTML = "";
   
    // filteredBooks.map(book => {
      books.map(book => {
                bookListHTML += `
                <div class="card">
                <p>${book.name}</p>
                <p>${book.isbn}</p>
                <p>${book.numberOfPages}</P>
                <p>${book.authors}</p>
                <p>${book.publisher}</p>
                <p>${book.released}</p> 
               </div> 
               <br>
                `;
        
              });
              bookList.innerHTML = bookListHTML;
            }

  displayBooks();
  searchInput.addEventListener("keyup", () => {
    displayBooks(searchInput.value);
  });
// const bookList = document.getElementById("book-list");

//     async function fetchBooks() {
//       const response = await fetch("https://www.anapioficeandfire.com/api/books");
//       const data = await response.json();
//       console.log(data);
//       return data;
      

//     }
//     const searchInput = document.getElementById("search-input");
//     async function displayBooks(searchTerm = "") {
//       const books = await fetchBooks();
//       let filteredBooks = books.filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()));
//       let bookListHTML = "";
      
    
//     // async function displayBooks() {
//     //   const books = await fetchBooks();
//     //   let bookListHTML = "";
//       books.map(book => {
//         bookListHTML += `
//         <div class="card">
//         <p>${book.name}</p>
//         <p>${book.isbn}</p>
//         <p>${book.numberOfPages}</P>
//         <p>${book.authors}</p>
//         <p>${book.publisher}</p>
//         <p>${book.released}</p> 
//        </div> 
//        <br>
//         `;

//       });
//       bookList.innerHTML = bookListHTML;
//     }

//     displayBooks()
//     searchInput.addEventListener("keyup", () => {
//       displayBooks(searchInput.value);
//     });