const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// código de desarrollo copiado a un entorno de ejecución
module.exports = {
    entry: "./src/app/index.js",//'./src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // crear una carpeta al lado de 'src'
        filename: 'bundle.js' // agrupar todos los archivos .js
    },
    devServer: {
        port: 3000
    },
    // reglas de webpack
    module: {
        // arreglo de múltiples configuraciones, cada configuración es un objeto de js
        rules: [
            {
                test: /\.css$/, // testea todos los archivos que terminen con css (expresión regular)
                use: ['style-loader', 'css-loader'] // estos modulos sirven para llamar css dentro de js, luego será convertido junto con nuestro código de js
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // el archivo que tienes que copiar está...
        }) // poder copiar un archivo html de un directorio a otro
    ]
}