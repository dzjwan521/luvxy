const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)
const moment = require("moment");
const objectIdToTimestamp = require("objectid-to-timestamp");

// 根据 id 生成创建时间 created_at
mongolass.plugin('addCreatedAt', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.created_at = moment(objectIdToTimestamp(item._id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: function (result) {
        if (result) {
            result.created_at = moment(objectIdToTimestamp(result._id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})

exports.User = mongolass.model('User', {
    email: { type: "string", required: true},
    nickname: { type: "string", required: true},
    password: { type: 'string', required: true },
    avatar: { type: 'string', required: true },
    phone: { type: 'string', required: true }
})
exports.User.index({ nickname: 1 }, { unique: true }).exec()// 根据用户名找到用户，用户名全局唯一

exports.Article = mongolass.model('Article', {
    author: { type: Mongolass.Types.ObjectId, required: true },
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    type: { type: 'string', enum: ["front", "backend", "design",'other',]},
    pv: { type: 'number', default: 0 }
})
exports.Article.index({ author: 1, _id: -1 }).exec()// 按创建时间降序查看用户的文章列表