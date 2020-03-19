const express = require('express');
const router = express.Router();
const json = require("../helper/json");
const sequelize = require("sequelize");
const model = require("../models/index");

// get all, search
router.get("/", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;
        const search = req.query.search == null ? "" : req.query.search;

        const posts = await model.Post.findAll({
            include: [
                {
                    model: model.Author
                }
            ],
            order: [
                ["id", "DESC"]
            ],
            where: {
                [sequelize.Op.or]: {
                    title: {
                        [sequelize.Op.like]: "%"+search+"%"
                    },
                    body: {
                        [sequelize.Op.like]: "%"+search+"%"
                    }
                },
            },
            limit: limit,
            offset: offset
        });

        var postCount = await model.Post.findOne({
            attributes: [
                [sequelize.fn("count", "id"), "_total"]
            ],
            where: {
                [sequelize.Op.or]: {
                    title: {
                        [sequelize.Op.like]: "%"+search+"%"
                    },
                    body: {
                        [sequelize.Op.like]: "%"+search+"%"
                    }
                },
            },
        });
        
        postCount = postCount.dataValues._total;

        const data = {
            posts: posts,
            misc: {
                page: page,
                limit: limit,
                postCount: {
                    totalItems: postCount,
                    totalPages: Math.ceil(postCount / limit)
                }
            }
        }

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

router.get("/:id", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const post = await model.Post.findByPk(req.params.id, {
            include: [
                {
                    model: model.Author
                },
                {
                    model: model.Comment,
                    orderBy: ["id", "DESC"],
                    limit: limit,
                    offset: offset
                }
            ]
        });

        var commentCount = await model.Post.findByPk(req.params.id, {
            include: [
                {
                    model: model.Comment,
                    attributes: [
                        [sequelize.fn("count", "id"), "_total"]
                    ]
                }
            ]
        });

        commentCount = commentCount.Comments.length > 0 ? commentCount.Comments[0].dataValues._total : 0;

        const data = {
            post: post,
            misc: {
                page: page,
                limit: limit,
                commentCount: {
                    totalItems: commentCount,
                    totalPages: Math.ceil(commentCount / limit)
                }
            }
        };

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

module.exports = router;