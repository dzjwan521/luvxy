
module.exports = function (app) {
    
    app.use('/signin', require('./signin'));
    app.use('/article', require('./article'));
    app.use('/list', require('./list'));
    app.use('/login', require('./login'));

};
