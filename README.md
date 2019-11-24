# Webpack 学习笔记

### 1. Webpack4 安装

```bash
# 进入到初始的项目文件夹下
cd 01-init

# 初始化，安装webpack 4
npm init -y
npm install webpack@4.41.2 webpack-cli -s
```

---

### 2. Webpack 配置文件

#### 1. 前期准备

​ **webpack 4 本身不需要配置文件, **但是相比于手动在终端输入大量配置信息, 添加配置文件 webpck.config.js

> Notes:
>
> ​ path.resolve('/home', 'a') -> /home/a
>
> ​ path.resolve('/home', '/a') -> '/a'
>
> ​ \_\_dirname -> 当前目录的路径

#### 2. 树结构

![](./img/选区_032.png)

- 添加 webpack.config.js

```javascript
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
```

    + 按照打包的配置文件进行打包

![](./img/选区_033.png)

![](./img/选区_034.png)

---

### 3. npm 脚本配置

#### 1. 添加 npm 脚本

在 package.json 下的 scripts 中添加脚本命令

![](./img/选区_035.png)

#### 2. 执行脚本

![](./img/选区_036.png)

---

### 3. 添加 Loader

#### 1. loader 添加机制

##### 添加 loader

    + 先在webpack.config.js中添加module
    + 在module中添加rule
    + rule中需要添加对应文件的后缀和处理其使用的loader

![](./img/选区_037.png)

##### 执行结果

![](./img/选区_038.png)

#### 2. 常用 loader

| 加载名称   | loader                   | 加载文件     |
| ---------- | ------------------------ | ------------ |
| CSS        | style-loader, css-loader | .css         |
| Sass 加载  | sass-loader, node-sass   | .sass        |
| 文件       | file-loader              | 图片, 字体等 |
| excel 文件 | csv-loader               | .csv, .tsv   |
| xml        | xml-loader               | .xml         |
|            |                          |              |

##### xml-loader 测试

1. 配置 loader

![](./img/选区_039.png)

2. 加入 xml 文件

![](./img/选区_041.png)

3. 重新打包

![](./img/选区_040.png)

4. 检查数据导入结果

![](./img/选区_042.png)
