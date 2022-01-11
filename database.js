const books = [
    {
        ISBN:"12345Book",
        title:"Getting started with mern",
        pubDate:"2022-01-07",
        language:'en',
        numPage:250,
        author: [1,2],
        publication:1,
        catagory:["tech","programming","education"]

    },

    {
        ISBN:"12345",
        title:"Getting started with mern",
        pubDate:"2022-01-07",
        language:'en',
        numPage:250,
        author: [1,2],
        publication: 3,
        catagory:["tech","programming","education"]

    },
];

const author = [
    {
        id:1,
        name:"kaushal",
        books: ["12345Book","12345"]
    },
    {
        id:2,
        name:"Elon musk",
        books: ["12345Book12","12345"]
    },
];



const publications = [
    {
        id:1,
        name:"writex",
        books:["1234Book","12345","12345Book"],
    },

    {
        id:2,
        name:"bookhall",
        books:[],
    }
];

    module.exports ={books,author,publications}
