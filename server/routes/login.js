const express = require('express')
const router = express.Router()
const sha1 = require('sha1')
const userModel = require('../model/userModel')

router.post('/',(req , res, next)=>{
    const {email,password}=req.body
    userModel.getUserByName(email)
    .then(user=>{
        if (sha1(password) !== user.password) {
            res.json({
                status: false,
                msg: '用户名或密码错误'
            })
        }else{
            delete user.password
            res.json({
                status: true,
                msg: '登陆成功',
                user: user
            })
        }
    })
    .catch(err=>{
        res.json({
            status:false,
            msg:'用户名不存在'
        })
    })
})

module.exports=router