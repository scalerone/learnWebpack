const path = require("path");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        // 输出目录
        path: path.join(__dirname, "dist"),
        // 文件名称
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                // @babel/core-babel核心模块    @babel/preset-env-编译ES6等 @babel/preset-react-转换JSX
                // yarn add babel-loader @babel/core @babel/plugin-transform-runtime  @babel/preset-env  @babel/preset-react y-D
                // @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积
                // @babel/polyfill: ES6 内置方法和函数转化垫片
                // yarn add @babel/polyfill @babel/runtime -D


                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            // 指定babel预处理转义
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase:path.join(__dirname,'./dist'),
        host:'0.0.0.0',
        port:8080,
        historyApiFallback:true, // 所有的404都连接到index.html
    }
};
