/**
 * 系统入口文件
 */
const express = require('express');
const path = require("path")
const router = require('./router.js')
const template = require('art-template');
const bodyParser = require("body-parser");
const app = express();

//启动静态资源服务
app.use('/www',express.static('public'))


//设置模板引擎

//设置模板引擎的路径
app.set('views',path.join(__dirname,'views'));
//设置模板引擎
app.set('view engine','art');
//使用express 兼容art-template模板引擎
app.engine('art',require('express-art-template'));


//处理请求参数
//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended:false}));
//处理json格式的请求参数
app.use(bodyParser.json())


//启动服务器功能

//配置路由
app.use(router)
app.listen(300,()=>{
    console.log('runing......')
})