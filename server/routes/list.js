const express = require('express')
const router = express.Router()
const articleModel = require('../model/articleModel')


// 获取所有文章
router.get('/', (req, res, next) => {
    articleModel.getByObj({})
        .then((result) => {
            const articles = result
            res.json({
                status: true,
                articles: articles,
                msg: "请求成功"
            })
        })
})

router.get('/:type', (req, res, next) => {
    const param=req.params.type
    let obj = {
        kind:'type',
        param
    }
    
    articleModel.getByObj(obj)
        .then((result) => {
            const articles = result
            res.json({
                status: true,
                articles: articles,
                msg: "请求成功"
            })
        })
})

module.exports = router