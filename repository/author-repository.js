const model = require("../models/index");
const sequelize = require("sequelize");

module.exports = {
    getAuthors: async (limit, offset, search = "") => {
        const authors = await model.Author.findAll({
            order: [
                ["id", "DESC"]
            ],
            where: {
                [sequelize.Op.or]: {
                    firstName: {
                        [sequelize.Op.like]: "%"+search+"%"
                    },
                    lastName: {
                        [sequelize.Op.like]: "%"+search+"%"
                    }
                },
            },
            limit: limit,
            offset: offset
        });

        const authorsTotal = await model.Author.findOne({
            attributes: [
                [sequelize.fn("count", "id"), "_total"]
            ],
            where: {
                [sequelize.Op.or]: {
                    firstName: {
                        [sequelize.Op.like]: "%"+search+"%"
                    },
                    lastName: {
                        [sequelize.Op.like]: "%"+search+"%"
                    }
                },
            }
        });

        return {
            rows: authors,
            total: authorsTotal.dataValues._total
        };
    },

    getAuthor: async (id, limit, offset) => {
        const author = await model.Author.findByPk(id, {
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

        const postsTotal = await model.Author.findByPk(id, {
            include: [
                {
                    model: model.Post,
                    attributes: [
                        [sequelize.fn("count", "id"), "_total"]
                    ]
                }
            ]
        });

        return {
            row: author,
            postsTotal: postsTotal.Posts.length > 0 ? postsTotal.Posts[0].dataValues._total : 0
        };
    }
}