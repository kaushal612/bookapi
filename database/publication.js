const mongoose = require("mongoose");

//publisher schema
const PublicationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    books: [String]
});

//publisher model
const PublicationModel = mongoose.model("Publication", PublicationSchema);
module.exports = PublicationModel;