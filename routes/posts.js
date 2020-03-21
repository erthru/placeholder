const express = require('express');
const router = express.Router();
const json = require("../helper/json");
const postRepository = require("../repository/post-repository");

// get all, search
router.get("/", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const posts = await postRepository.getPosts(limit, offset, req.query.search);
        
        const data = {
            posts: posts.rows,
            misc: {
                posts: {
                    total: posts.total,
                    pages: Math.ceil(posts.total / limit)
                }
            }
        }

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

        const post = await postRepository.getPost(req.params.id, limit, offset);

        const data = {
            post: post.row,
            misc: {
                postComments: {
                    total: post.commentsTotal,
                    pages: Math.ceil(post.commentsTotal / limit)
                }
            }
        };

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

module.exports = router;