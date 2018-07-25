const path = require("path");
const express = require("express");
const config = require("config-lite")(__dirname);
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require("./routes");
const compress = require('compression');
const pkg = require("./package");

const app = express();
// 日志模块
const winston = require("winston");
const expressWinston = require("express-winston");

//全局设置跨域
app.use(cors());
//gzip压缩
app.use(compress());

// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 设置模板引擎为 html
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, "./www")));
app.use(express.static(path.join(__dirname, "./public")));


const baseURL = process.env.NODE_ENV == 'production' ? '//luvxy.cn':'//localhost:3000' 
app.use(function (req, res, next) {
    res.locals.baseURL = baseURL
    next();
});

// 日志存储
// 正常请求的日志
app.use(expressWinston.logger({
    transports: [
        // new (winston.transports.Console)({
        //     json: true,
        //     colorize: true,
        // }),
        new winston.transports.File({
            filename: "logs/success.log",
        }),
    ],
}));
// 路由
routes(app);
// 错误请求的日志
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true,
        }),
        new winston.transports.File({
            filename: "logs/error.log",
        }),
    ],
}));

// 错误提示
app.use(function (err, req, res, next) {
    if (err) console.error(err);
});

// 监听端口，启动程序
app.listen(config.port, function () {
    console.log(`${pkg.name} listening on port ${config.port}`);
});
