const path = require('path');

module.exports = {
  entry: './src/index.js', // Tu punto de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se genera el bundle final
    filename: 'bundle.js',
    publicPath: '/', // importante para React Router y rutas relativas
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // carpeta que servirá los archivos estáticos
    port: 8080, // o el puerto que quieras (3000, 8080, etc.)
    open: true, // abre el navegador automáticamente
    hot: true, // recarga en caliente
    historyApiFallback: true, // evita errores 404 en React Router
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // importante para JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 👈 Esto permite importar JSX sin poner la extensión
  },
};
