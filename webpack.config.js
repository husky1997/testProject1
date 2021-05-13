const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackplugin = require('html-webpack-plugin');
const {webpack} = require('webpack');

const isDev = process.env.NODE_ENV === 'development'
const config= {
    // 适应webpack-dev-server环境
    target:'web',
    // 声明入口
    entry:path.join(__dirname,'src/index.js'),
    // 出口
    output:{
        filename: 'bundle.js',
        path:path.join(__dirname,'dist')
    },
    plugins:[
       
        new htmlWebpackplugin(),
        //newbug make sure to include the plugin for the magic
        new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {
                // 检测文件类型
                test:/\.vue$/,
                // webpack里有vue-loader为其处理.vue类型的文件
                loader:'vue-loader'
            },
            {
                // 检测文件类型
                test:/\.jsx$/,
               
                loader:'babel-loader'
            },
                // 将css写入到html
            {
                test:/\.css$/, use:['style-loader', 'css-loader'],//newbug配置处理.css文件的第三方处理规则
            },
            {
                // css预处理
                test: /\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },
            //es6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options:{
                  presets:["es2016"]
                },
                exclude:[/node_modules/]
              
            },
            // 图片
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }

}
// 根据不同环境判断开发和正式环境
if(isDev){
    config.devServer = {
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true,
        }
    }
}

module.exports = config