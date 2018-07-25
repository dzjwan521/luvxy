# luvxy
> 基于create-react-app，主要是想巩固自己学到的东西，做一个完整的项目，自己也一直想去写写博客
>

### 技术栈
- 前端 react + redux + react-route-dom + redux-sage + antd
- 服务端 express + mongodb

### 特点
* react-router4的按需加载实践（基于create-react-app和Bundle组件）
* react16最新模块热加载方式
* create-react-app中集成sass
* 更改打包路径,webpack将静态资源都打包到/server/www目录(express静态资源)
* express全局设置跨域,开启gzip压缩
* 前端和后端的依赖包分离

### 如何运行
```
//前端在根目录 默认3000端口
npm i 
npm start
//打包到/server/www
npm run build 

//后端在server目录下  默认3000端口 注意先打开数据库
npm i 
npm run dev

```  

### 目录说明

```
.
├── README.md
├── a.md
├── config
│   ├── env.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── paths.js
│   ├── polyfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── server
│   ├── config
│   │   └── default.js
│   ├── index.js
│   ├── logs
│   │   ├── error.log
│   │   └── success.log
│   ├── middlewares
│   │   └── check.js
│   ├── model
│   │   ├── articleModel.js
│   │   ├── index.js
│   │   └── userModel.js
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── imgs
│   ├── readme.md
│   ├── routes
│   │   ├── article.js
│   │   ├── index.js
│   │   ├── list.js
│   │   ├── login.js
│   │   └── signin.js
│   ├── uploads
│   │   ├── 6657e34c8dad937ffc10e4cda5d0b308
│   │   ├── 9c3a8d454ce2fd9e1f2c474e6da4b86e
│   │   ├── 9f636a6fa524e11b5dd883d8a2332713
│   │   └── e17692cc2abd16bd32a4bb7f17eed9cc
│   └── www
│       ├── asset-manifest.json
│       ├── favicon.ico
│       ├── index.html
│       ├── manifest.json
│       ├── service-worker.js
│       └── static
└── src
    ├── App.jsx
    ├── components
    │   ├── Demo.jsx
    │   ├── Footer
    │   ├── Header
    │   ├── Loginform
    │   ├── Nav
    │   ├── Sendform
    │   ├── Signform
    │   ├── Topiclist
    │   └── content
    ├── img
    │   ├── logo.jpg
    │   ├── svg1.svg
    │   ├── svg2.svg
    │   ├── svg3.svg
    │   └── svg4.svg
    ├── index.css
    ├── index.js
    ├── pages
    │   ├── Article
    │   ├── Bundle.jsx
    │   ├── Home
    │   ├── List
    │   ├── Login
    │   ├── Send
    │   └── Signin
    └── redux
        ├── action
        ├── reducer
        ├── saga
        └── store

38 directories, 53 files

```  
