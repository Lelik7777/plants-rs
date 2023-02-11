const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const config = {
        //проверка режима,в котором запускаем webpack
        mode: isProduction ? 'production' : 'development',
        //это мапинг из документации webpack
        devtool: isProduction ? '' : 'source-map',
        //watch будет работать,если не режим продакшен
        watch:!isProduction,
        //прописываем точку входа с именем файла и точку выхода и имя файла в точке выхода
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            //именно это название файла нужно указывать в index.html в качестве подключаемого файла js
            filename: 'script.js'
        },
        //здесь подключаемые плагины,через создание объекта нужного плагина
        plugins: [
            new CleanWebpackPlugin(),
        ],
        //их ищем в доке webpack в разделе loader
        //это копируем из раздела babel-loader
        module:{
            rules:[
                //loader for babel
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env']
                            ]
                        }
                    }
                }
            ]
        },
    }
    return config;
}