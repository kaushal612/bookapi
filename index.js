// import { database } from "./database";


const express = require("express");

const booky = express();

const database = require("./database");


/* 
Route          /
Description   get all books
Access         Public
Parameters    NONE
Methods        GET
*/

booky.get("/", (req, res) => {

    //changing this line

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


booky.listen(3000, () => console.log("server is running"));