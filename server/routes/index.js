
module.exports = function (app) {
    
    app.use('/signin', require('./signin'));
    app.use('/article', require('./article'));
    app.use('/list', require('./list'));
    app.use('/login', require('./login'));

   

   
    // 404 page
    // app.use(function (req, res) {
    //     if (!res.headersSent) {
    //         res.status(404).render('404');
    //     }
    // });
};
