# Webpack 学习笔记

### 1. Webpack4  安装

~~~bash
# 进入到初始的项目文件夹下
cd 01-init

# 初始化，安装webpack 4
npm init -y
npm install webpack@4.41.2 webpack-cli -s
~~~

### 2. Webpack 配置文件

#### 1. 前期准备

​	**webpack 4本身不需要配置文件, **但是相比于手动在终端输入大量配置信息, 添加配置文件webpck.config.js

> Notes: 
>
> ​	path.resolve('/home', 'a')    ->    /home/a
>
> ​	path.resolve('/home', '/a') -> '/a'
>
> ​	__dirname -> 当前目录的路径

#### 2. 树结构

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_032.png)

+ 添加webpack.config.js
~~~javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
  	// 打包得到的文件名称
    filename: 'bundle.js',
    //　打包后所处的位置
    path: path.resolve(__dirname, 'dist')
  }
};

~~~



