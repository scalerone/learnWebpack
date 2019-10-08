// webpack.config.js初始化内容
const path = require('path');
module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    output: {
        // 输出目录
        path: path.join(__dirname, "dist"),
        // 文件名称
        filename: "bundle.js"
    },
    module:{},
    plugins:[],
    devServer:{}
}

