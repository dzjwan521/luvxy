const User = require('./index').User

module.exports= {
    create:(obj)=>{
        return User.create(obj).exec()
    },
// 通过用户名获取用户信息
    getUserByName:(email)=> {
        return User
            .findOne({ email: email })
            .addCreatedAt()
            .exec()
    }
}