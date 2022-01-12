const mongoose = require('mongoose');


//author schema
const AuthorSchema = new mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});


//author model
const AuthorModel = mongoose.model('Author', AuthorSchema);

module.exports = AuthorModel;