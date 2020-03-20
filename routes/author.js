const express = require('express');
const router = express.Router();
const json = require("../helper/json");
const sequelize = require("sequelize");
const model = require("../models/index");

// get all
router.get("/", async (req, res, next) => {
    try{
        const page = req.query.page == null ? 1 : parseInt(req.query.page);
        const limit = req.query.limit == null ? 10 : parseInt(req.query.limit);
        const offset = (page - 1) * limit;

        const authors = await model.Author.findAll({
            order: [
                ["id", "DESC"]
            ],
            limit: limit,
            offset: offset
        });

        var authorCount = await model.Author.findOne({
            attributes: [
                [sequelize.fn("count", "id"), "_total"]
            ]
        })

        authorCount = authorCount.dataValues._total;

        const data = {
            authors: authors,
            misc: {
                page: page,
                limit: limit,
                authorCount: {
                    totalItems: authorCount,
                    totalPages: Math.ceil(authorCount / limit)
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

        const author = await model.Author.findByPk(req.params.id, {
            include: [
                {
                    model: model.Post,
                    order: [
                        ["id", "DESC"]
                    ],
                    limit: limit,
                    offset: offset
                }
            ]
        });

        var postCount = await model.Author.findByPk(req.params.id, {
            include: [
                {
                    model: model.Post,
                    attributes: [
                        [sequelize.fn("count", "id"), "_total"]
                    ]
                }
            ]
        });

        postCount = postCount.Posts.length != 0 ? postCount.Posts[0].dataValues._total : 0;

        const data = {
            author: author,
            misc: {
                page: page,
                limit: limit,
                postCount: {
                    totalItems: postCount,
                    totalPages: Math.ceil(postCount / limit)
                }
            }
        };

        json.ok(res, data);
    }catch(err){
        json.fail(res, err.message);
    }
});

module.exports = router;