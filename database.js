const books = [
    {
        ISBN:"12345Book",
        title:"Getting started with mern",
        pubDate:"2022-01-07",
        language:'en',
        numPage:250,
        author: [1,2],
        publication:[1],
        catagory:["tech","programming","education"]

    },
];

const author = [
    {
        id:1,
        name:"kaushal",
        books: ["12345Book"]
    },
    {
        id:2,
        name:"Elon musk",
        books: ["12345Book12"]
    },
]



const publication = [
    {
        id:1,
        name:"writex",
        books:["1234Book"],
    }];

    module.exports ={books,author,publication}
