const express = require("express");
const router = express.Router();
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const destPath = path.resolve(__dirname, '../uploads')
const sha1 = require('sha1')
const userModel = require('../model/userModel')
const upload = multer({//设置文件上传临时目录
    dest: destPath,
})

//注册
router.post('/',(req,res,next)=>{
    const { nickname, avatar, email} = req.body
    const password = sha1(req.body.password)
    const phone = req.body.prefix+req.body.phone
    const user = { 
        nickname, 
        avatar, 
        email,
        password,
        phone
    }
    if(email != '414603173@qq.com'){

        res.json({
            status: false,
            msg: '目前禁止注册'
        });
    }
    userModel.create(user)
    .then(result=>{
        delete user.password
        res.json({
            status: true,
            msg: '注册成功,已登录',
            user:user
        });
        }).catch( err =>{
            if (err.message.match('duplicate key')) {
                res.json({
                    status: false,
                    msg: '用户名已存在'
                });
            }
            next(err)
        })


})
//上传
router.post('/uploads/avatar', upload.single('avatar'), function (req, res, next) {
    const name = `${req.file.filename}-${req.file.originalname}`
    fs.rename(req.file.path, path.resolve(__dirname, '../public/avatar/',name), function (err) {
        if (err) {
            throw err;
        }
    })
    res.json({ imgUrl:  '/avatar/' + name});
})

module.exports = router