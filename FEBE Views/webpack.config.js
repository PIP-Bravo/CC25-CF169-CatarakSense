const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry:{
    index: './src/scripts/index.js',
    deteksi: './src/scripts/deteksi.js', 
    kontak: './src/scripts/kontak.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"), // Output ke folder dist
    clean: true, // Bersihkan folder dist setiap build
  },
  mode: "development", // Ganti ke 'production' saat release
  devServer: {
    port: 3000,       
    static: './dist',  
    open: true,  
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // Ini harus RegExp, bukan string
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // HTML template kamu
      filename: "index.html", // Output HTML di dist/index.html
      chunks: ['script', 'index'],
    }),
     new HtmlWebpackPlugin({
      template: "./src/deteksi.html",
      filename: "deteksi.html",
      chunks: ['script', 'deteksi'],
    }),
     new HtmlWebpackPlugin({
      template: "./src/kontak.html",
      filename: "kontak.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
