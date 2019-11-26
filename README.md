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

**webpack 4 本身不需要配置文件, **但是相比于手动在终端输入大量配置信息, 添加配置文件 webpck.config.js

> Notes:
>
> path.resolve('/home', 'a') -> /home/a
>
> path.resolve('/home', '/a') -> '/a'
>
> \_\_dirname -> 当前目录的路径

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

---

### 4. 打包拆分

    1. 实现结果

![](./img/选区_044.png)

2. webpack.config.js 的配置

![](./img/选区_045.png)

3. 执行 npm run build 即可重新打包
4. 这里需要指定不同的打包文件名称,如果设定同样的文件名就会报错

![](./img/选区_046.png)

5. html-webpack-plugin

2 中打包出的文件为 asset.bundle.js 和 package.bundle.js,因此在 index.html 中导入的文件必须写死为上述文件名，才能导入，但是如果这个时导出的文件名为 asset1.bundle.js 或者再拆出一个包的话,就没有办法自动导入，这个时候我们添加 html-webpack-plugin 插件可以自动在 index.html 中的添加打包出的 bundle 文件

**添加 webpack 插件**

- webpack.config.js

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    asset: './src/index.js',
    package: './src/package.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};
```

- 重新打包

![](./img/选区_047.png)

- 打包出的 index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Output Management</title>
  </head>
  <body>
    <script type="text/javascript" src="asset.bundle.js"></script>
    <script type="text/javascript" src="package.bundle.js"></script>
  </body>
</html>
```

> 该插件或自动将打包得到的 js 文件导入到新创建的 html 文件中

---

### 5. Source Map 和 dev-server

#### 1. source map 作用

当代码代码运行出现问题的时候, 若不使用 source map 会出现的问题,无法定位错误代码到源文件, 而是定位到了打包文件 bundle

![](./img/选区_048.png)

#### 2. 使用 source Map 之后

可以将源文件中报错的位置显示到控制台上

![](./img/选区_049.png)

---

#### 3. Source Map Webpack 配置

![](./img/选区_050.png)

---

#### 4. webpack server 和 watch

现在需要手动运行 npm run build 当代码改变的时候进行重新构建, 为了避免重复工作，我们需要添加自动构建工具

- webpack watch mode
- webpack-dev-server
- webpack-dev-middle

**(1) 观察者模式**

```bash
# 使用webpack自带的观察者模式
webpack --watch
```

- 优点: 当依赖图中的文件发生变化, 代码会重新被构建, 不用手动构建
- 缺点：并不会自动刷新浏览器，需要手动刷新

**(2) webpack-dev-server**

 [webpack-dev-server 配置](https://www.webpackjs.com/configuration/dev-server/)

```bash
# 添加webServer
yarn add webpack-dev-server --open

# 启动webpack-server
webpack-dev-server --config webpack.config.js --open
```

**(3) webpack-dev-middleware**

> webpack-dev-middleware 是一个中间件,其将 webpack 处理后生成的文件传递给服务器, webpack-dev-server 内部用到了 webpack-dev-middleware 这个中间件

- 配置代码

```javascript
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compier = webpack(config);

app.use(
  webpackDevMiddleware(compier, {
    publicPath: config.output.publicPath
  })
);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!\n');
});
```

- webpack-dev-middleware 的输出文件存在内存中， publicPath 要和 config 中的 publicPath 一致，不然会找不到打包后的 bundle 文件

[webpack-dev-middleware 配置](<[https://www.webpackjs.com/guides/development/#%E4%BD%BF%E7%94%A8-webpack-dev-middleware](https://www.webpackjs.com/guides/development/#使用-webpack-dev-middleware)>) 还有很多坑,后序填

---

#### 5. 模块热替换

- 热更新：当文件进行修改的时候, 不需要直接刷新页面，可以直接

对修改模块进行修改刷新, 而不需要完全刷新

- webpack.config.js 配置

![](./img/选区_051.png)

- 捕获文件的更新函数并操作回调

![](./img/选区_052.png)

- 改变 print.js 之后,可以在 console 中看到结果

![](./img/选区_053.png)

- 将 webpack-dev-server 从 webpack.config.js 中抽离

```javascript
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('start');
});
```

此时可以将 devServer 从 webpack.config.js 中抽离, 这样当牵扯到比较复杂的 webpackDevServer 问题时可以简化 Webpack.config.js 的配置文件

- 存在的问题: 当完成热更新后虽然对应的模块已经被更新, 但是引用的文件还是使用原来的模块，因此如果不刷新的话就存在虽然模块更新但是展示的还是原有的交互和 UI

**故障模拟**

1. 我们创建一个 component.js 来模拟这个故障

![1574671178897](./img/选区_054.png)

2. 修改原来的 index.js 文件

![1574671289832](./img/选区_055.png)

3. 修改前结果

![1574671511377](./img/选区_056.png)

4. 修改 newComponent 中文案后结果

![](./img/选区_057.png)

**解决方案**

- 当热更新触发的时候重新更新响应的元素

![](./img/选区_058.png)

- 有一些和 HMR 平滑结合的 loader
  - style-loader, css-loader
  - react-hot-loader
  - vue loader
  - elm loader
  - redux HMR

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)

---

### 6. 构建生产环境

#### 0. 几个概念

+ tree shaking: 将代码中无引用的代码不进行打包
+ 开发环境: 开发环境中需要实时加载，HMR等高性能模块，但是在生产环境中我们更需要更小的bundle,更优化的资源以及改善加载时间.

#### 1. 环境配置

~~~bash
npm install webpack-merge -S
~~~

#### 2. webpack生产环境拆分

+ webpack.common.js: 在生产环境和开发环境公共的webpack配置

~~~javascript
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new CleanWebpackPlugin()
  ]
};
~~~

+ webpack.dev.js: 开发环境用的单一的server配置文件

~~~javascript
const merge = require('webpack-merge');
// 用于js代码的压缩
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
~~~

+ webpack.prod.js: 生产环境下的用于代码压缩的webpack配置

~~~javascript
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  plugins: [new UglifyJSPlugin()]
});
~~~

---

### 7. 代码分离(打包)

+ 入口起点(entry手动分离)
+ 使用CommonsChunkPlugin插件去重分离
+ 动态导入，通过模块的内联函数来分离代码

##### 1. entry 手动分离

之前有记录过, 通过手动在entry中设置多个入口文件，然后分别构建依赖图，之后再分别打包

+ 优点：简单直观
+ 缺点: 如果多个bundle之间有重复的模块, 会重复被打包;方法不够灵活，不能按照逻辑进行拆分
+ 实验过程

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_059.png)

+ 打包结果

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_060.png)

#### 2. 使用CommonChunkPlugin

> webpack.optimize.CommonsChunkPlugin已经被webpack.config.js中的optimization.splitChunks替代了，现在需要通过该设置来自动进行打包分离

+ index.js

~~~javascript
import _ from 'lodash';

var elem = document.createElement('div');

elem.innerText = _.join(['first', 'webpack'], ' ');

document.body.appendChild(elem);
~~~

+ another.js

~~~javascript
import _ from 'lodash';

console.log(_.join(['1', '2', '3'], '-'));
~~~

**这里两个文件都添加了lodash, 如果使用方法一进行添加, 则lodash会被打包两次，浪费性能，使用splitChunks可以优化打包方法**

+ webpack.config.js配置

~~~javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another.js'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    // splitChunks  
    splitChunks: {
      // 配置任何文件都进行优化
      chunks: 'all'
    }
  }
};
~~~

[optimization.splitChunks配置手册](https://webpack.docschina.org/configuration/optimization/#optimization-splitchunks)

+ 打包结果

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_061.png)

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_062.png)

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_063.png)

![](/home/cyx/Desktop/Learning/webpackLearn/img/选区_064.png)