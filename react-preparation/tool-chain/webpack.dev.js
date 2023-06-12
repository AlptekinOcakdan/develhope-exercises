const path = require('path');
const ESlintPlugin = require('eslint-webpack-plugin');
const options = {};

module.exports = {
    entry: './src/entry.js',
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new ESlintPlugin(options)],
};