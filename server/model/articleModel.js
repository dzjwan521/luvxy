const Article = require('./index').Article

module.exports={
    send:(obj)=>{
        // 创建一篇文章
        return Article.create(obj).exec()
    },
    getOneArticle:(id)=>{
        return Article
            .findOne({ _id: id })
            .populate({ path: 'author', model: 'User' })
            .addCreatedAt()
            .exec()
    },
    incPv:(id)=>{
        return Article
            .update({ _id: id }, { $inc: { pv: 1 } })
            .exec()
    },
    incLike:(id)=>{
        return Article
            .update({ _id: id }, { $inc: { like: 1 } })
            .exec()
    },
    getByObj:(obj)=>{
        let query = {};
        const kind = obj.kind;
        const param = obj.param
        switch (kind) {
            case 'author':
                query.author = param;
                break;
            case 'type':
                query.type = param;
                break;

            default: query={}
                break;
        }
        
        return Article
        .find(query)
        .populate({ path: 'author', model: 'User' })
        .sort({_id: -1,})
        .addCreatedAt()
        .exec()

    }
}