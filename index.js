// import { database } from "./database";


const express = require("express");

const booky = express();

const database = require("./database");
//configuration

booky.use(express.json());


/* 
Route          /
Description   get all books
Access         Public
Parameters    NONE
Methods        GET
*/

booky.get("/", (req, res) => {

    //changing this line
    // console.log(database.books);

    return res.json({ books: database.books });
});


/* 
Route      /is
Description  get spacific books baased on ISBN
Access        PUBLIC
Parameters     book ISBN
Methods        GET
*/
booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter((book) =>
        book.ISBN === req.params.isbn
    )

    console.log(getSpecificBook);

    if (getSpecificBook.length === 0) {
        return res.json({
            error: `No book found for the isbn of ${req.params.isbn}`
        });
    }
    else {
        return res.json(getSpecificBook);
    }
})

/* 
Route      /c
Description  get spacific books based on category 
Access        PUBLIC
Parameters     category of book
Methods        GET
*/

booky.get("/c/:category",(req,res)=>{

     const getSpecificBook = database.books.filter((book) => 
            book.catagory.includes(req.params.category));

            if (getSpecificBook.length === 0) {
                return res.json({
                    error: `No book found for the category of ${req.params.category}`
                });
            }
            else {
                return res.json(getSpecificBook);
            }

})



/* 
Route      /author
Description  get spacific books based on author 
Access        PUBLIC
Parameters     NONE
Methods        GET
*/

booky.get("/author",(req,res)=>{

      
       return res.json({author:database.author})
})


/* 
Route      /author/book
Description  get spacific books based on category 
Access        PUBLIC
Parameters    ISBN
Methods        GET
*/

booky.get("/author/book/:isbn",(req,res)=>{

    const getSpecificauthor = database.author.filter((author) => 
           author.books.includes(req.params.isbn));

           if (getSpecificauthor.length === 0) {
               return res.json({
                   error: `No book found for the category of ${req.params.isbn}`
               });
           }
           else {
               return res.json(getSpecificauthor);
           }

})



//****  POST  */
/* 
Route      /book/add
Description  add new book 
Access        PUBLIC
Parameters    NONE
Methods        POST
*/



booky.post("/book/add",(req,res)=>{


    const {newBook}=req.body;

    database.books.push(newBook);
    return res.json({books: database.books})

          

})



/* 
Route      /author/add
Description  add new author 
Access        PUBLIC
Parameters    NONE
Methods        POST
*/



booky.post("/author/add",(req,res)=>{


    const {newAuthor} =req.body;

    database.author.push(newAuthor);
    return res.json({author: database.author})

          

})

//****PUT */
/* 
Route        /book/update/title
Description   update book title
Access        PUBLIC
Parameters    ISBN
Methods        PUT
*/

booky.put("/book/update/title/:isbn",(req,res)=>{

        
        //for each  -->updating direct into databse.js

        //map  --> create new array

        database.books.forEach((book)=>{
            

            if(book.isbn === req.params.isbn){

                 book.title=req.body.newBookTitle;
                 return;
            }
        });

        return res.json({books: database.books});

})



//****PUT */
/* 
Route        /book/update/author
Description   update book author
Access        PUBLIC
Parameters    ISBN
Methods        PUT
*/

booky.put("/book/update/author/:isbn/:authorId",(req,res)=>{

   //update book database
   database.books.forEach((book)=>{
       if(book.ISBN === req.params.isbn)
       {
           return book.author.push(parseInt(req.params.authorId))
       }
   });

   //update author database

   database.author.forEach((author)=>{

    if(author.id ===parseInt(req.params.authorId))
    {
        return author.books.push(req.params.isbn);
    }
   });

   return res.json({books:database.books,author:database.author})

})


//****PUT */
/* 
Route        /publication/update/book/
Description   update/add new book to publication
Access        PUBLIC
Parameters    ISBN
Methods        PUT
*/

booky.put("/publication/update/book/:isbn",(req,res)=>{

    database.publications.forEach((publication)=>{
        if(publication.id==req.body.pubId)
        {
            return publication.books.push(req.params.isbn);
        }
    });

    //update book database

    database.books.forEach((book)=>{
      
        if(book.ISBN === req.params.isbn)
        {
            console.log(req.body.pubId);
            return book.publication=req.body.pubId;
        }
    });

    return res.json({books: database.books,publications: database.publications});


})


booky.listen(3000, () => console.log("server is running"));

//HTTP Client --> helper who helps you to make http request