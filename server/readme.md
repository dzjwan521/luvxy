# 项目记录


- 运行前先启动数据库服务

- 启动项目 npm run dev  默认3000端口

- views下的页面已经废弃  已经由react重构

### 部分命令记录
* 数据库后台  mongod --fork --dbpath=/root/data --logpath=/root/log/mongo.log --logappend
* 查端口号命令 netstat -an|grep 27017
* 查找mongod命令 ps -ef|grep mongod|grep rs1
* 杀死mongod命令 killall mongod
### pm2 常用命令:
* pm2 start/stop: 启动/停止程序
* pm2 reload/restart [id|name]: 重启程序
* pm2 logs [id|name]: 查看日志
* pm2 l/list: 列出程序列表
### nginx命令记录
```
nginx -s reload ：修改配置后重新加载生效
nginx -s reopen ：重新打开日志文件
nginx -t -c /path/to/nginx.conf 测试nginx配置文件是否正确
nginx -s stop :快速停止nginx
quit ：完整有序的停止nginx
查询nginx主进程号
ps -ef | grep nginx
从容停止Nginx：
kill -QUIT 主进程号  
例如：kill -QUIT 16391

快速停止Nginx：
kill -TERM 主进程号  

强制停止Nginx：
kill -9 主进程号 
```


### linux
chown -R www /alidata/www/phpwind/
即可将目录/alidata/www/phpwind下的所有文件和目录的拥有者都修改为www账户。

更改权限
chmod [who] [+ | - | =] [mode] 文件名

查看端口号占用情况
netstat -apn|grep 端口

查看具体信息   ps -aux|grep <pid>  

杀掉该进程
kill -9 <pid>  