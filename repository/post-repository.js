const model = require("../models/index");
const sequelize = require("sequelize");

module.exports = {
    getPosts: async (limit, offset, search = "") => {
        const posts =  await model.Post.findAll({
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

        const postsTotal = await model.Post.findOne({
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

        return {
            rows: posts,
            total: postsTotal.dataValues._total
        };
    },

    getPost: async (id, limit, offset) => {
        const post = await model.Post.findByPk(id, {
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

        const commentsTotal = await model.Post.findByPk(id, {
            include: [
                {
                    model: model.Comment,
                    attributes: [
                        [sequelize.fn("count", "id"), "_total"]
                    ]
                }
            ]
        });

        return {
            row: post,
            commentsTotal: commentsTotal.Comments.length > 0 ? commentsTotal.Comments[0].dataValues._total : 0
        };
    }
}