const express = require("express");
const bookRouter = express.Router();

function router(nav) {
    const books = [
        {
            title: "War and Peace",
            genre: "Historical Fiction",
            author: "Lev Nikolayevicj Tolstoy",
            read: false
        },
        {
            title: "Les Misérables",
            genre: "Historical Fiction",
            author: "Victor Hugo",
            read: false
        },
        {
            title: "The Time Machine",
            genre: "Science Fiction",
            author: "H. G. Wells",
            read: false
        },
        {
            title: "A Journey into the Center of the Earth",
            genre: "Science Fiction",
            author: "Jules Verne",
            read: false
        },
        {
            title: "The Dark World",
            genre: "Fantasy",
            author: "Kenneth Grahame",
            read: false
        }
    ];

    bookRouter.route("/")
        .get((req,res) => {
            res.render(
                "bookListView",
                { 
                    nav: [ { link: "/books", title:"Books" }, { link: "/authors", title: "Authors" } ], 
                    title: "Library" ,
                    books
                });
    });

    bookRouter.route("/:id")
        .get((req,res) => {
            const { id } = req.params;
            res.render(
            "bookView",
                { 
                    nav, 
                    title: "Library" ,
                    book:books[id]
                });
    });
    return bookRouter;
}

module.exports = router;