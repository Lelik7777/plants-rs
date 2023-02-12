const webpack = require('webpack');
const path = require('path');
//все плагины вначале подключаются через require(получаем к ним доступ)
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';
    const config = {
        //проверка режима,в котором запускаем webpack
        mode: isProduction ? 'production' : 'development',
        //это мапинг из документации webpack
        devtool: isProduction ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',
        //watch будет работать,если не режим продакшен
        watch: !isProduction,
        //прописываем точку входа с именем файла и точку выхода и имя файла в точке выхода
        //добавляем в точку входа еще путь к стилям,чтобы напрямую не импортить их в index.js
        entry: ['./src/index.js','./src/sass/style.scss'],
        output: {
            path: path.join(__dirname, '/dist'),
            //именно это название файла нужно указывать в index.html в качестве подключаемого файла js
            filename: 'script.js'
        },
        //здесь подключаемые плагины,через создание объекта нужного плагина
        plugins: [
            new CleanWebpackPlugin(),
            //плагин для генерации html вебпаком; вставляем его перед плагином для css,поскольку html должен быть создан раньше css
            //template - здесь указывается наш html файл,в котором теперь можно удалить ссылки на стили и подключение скриптов
            new HtmlWebpackPlugin({
                template:'index.html',
            }),
            //в конфигурации для этого плагина указываем имя нашего file.css. Этот плагин работает не с sass,а с css.
            //этот плагин заменяет собой работу style-loader,который загружает css одним куском,поэтому этот loader этого плагина пишем вместо style-loader
            new MiniCssExtractPlugin({
                filename: 'style.css'
            })
        ],
        //их ищем в доке webpack в разделе loader
        //это копируем из раздела babel-loader
        module: {
            rules: [
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
                },

                //rules for styles
                {
                    test: /\.scss$/,
                    //читает здесь webpack справа налево,поэтому первый loader пишем последним(возможно здесь реализован принцип стека)
                    // use: [
                    //     'style-loader','css-loader','sass-loader'
                    // ]
                    //меняем style-loader to MiniCssExtractPlugin.loader
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
                },
                //for images: jpeg,png,svg(его добавил сам,поскольку по умолчанию его нет)
                {
                    test: /\.(png|svg|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    // с этим были битые картинки,после того как добавил generator,то эта проблема была решена
                    // use: [
                    //     {
                    //         loader: 'file-loader',
                    //     },
                    // ],
                    generator: {
                        filename: () => {
                            return isDev ? 'img/[name][ext]' : 'img/[name].[contenthash][ext]';
                        }
                    }
                },
                //чтобы показались картинки
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
            ]
        },
    }
    return config;
}