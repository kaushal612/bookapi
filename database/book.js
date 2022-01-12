const mongoos = require("mongoose");

//book schema
const BookSchema = mongoos.Schema({

    ISBN: String,
    title: String,
    pubDate: String,
    language: String,
    numPage: Number,
    authors: [Number],
    publication: Number,
    catagory:[String]

});


//Create a book model

const BookModel= mongoos.model("books",BookSchema);

module.exports = BookModel;