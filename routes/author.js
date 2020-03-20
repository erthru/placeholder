const express = require('express');
const router = express.Router();
const json = require("../helper/json");
const authorRepository = require("../repository/author-repository");

// get all
router.get("/", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const authors = await authorRepository.getAuthors(limit, offset, req.query.search);

        const data = {
            authors: authors.rows,
            misc: {
                authors: {
                    total: authors.total,
                    pages: Math.ceil(authors.total / limit)
                }
            }
        };

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

// get one
router.get("/:id", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const author = await authorRepository.getAuthor(req.params.id, limit, offset)

        const data = {
            author: author.row,
            misc: {
                authorPosts: {
                    total: author.postsTotal,
                    pages: Math.ceil(author.postsTotal / limit)
                }
            }
        };

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

module.exports = router;