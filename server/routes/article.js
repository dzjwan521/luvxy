const express = require('express')
const router = express.Router()
const articleModel = require('../model/articleModel')
const userModel = require('../model/userModel')

//发表
router.post('/send', (req, res, next) => {
    const email = req.body.email
    const title = req.body.title
    const type = req.body.type
    const content = req.body.content
    console.log(req.body)
    userModel.getUserByName(email)
        .then(user => {
            delete user.password
            const author = user._id
            const article = {
                author,
                type,
                title,
                content
            }
            articleModel.send(article)
            .then(result=>{
                articleId = result.ops[0]._id
                res.json({
                    status: true,
                    msg: '登陆成功',
                    articleId
                })
            })
            .catch(next)
        })
       
})

router.get('/like/:id', function (req, res, next) {
    const id = req.params.id
    articleModel.incLike(id).then(function (result) {
          
                res.json({
                    status: true,
                    msg: "请求成功"
                })
          
        })
        .catch(next)
})

router.get('/:id', function (req, res, next) {
    const id = req.params.id

    Promise.all([
        articleModel.getOneArticle(id), // 获取文章信息
        articleModel.incPv(id)// pv 加 1
    ])
        .then(function (result) {
            const article = result[0]
            if (!article) {
                res.json({
                    status: false,
                    article: article,
                    msg: "该文章不存在"
                })                                  
            }else{
                res.json({
                    status: true,
                    article: article,
                    msg: "请求成功"
                })
            }

           
        })
        .catch(next)
})





module.exports = router