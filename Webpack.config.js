const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
      template: "./public/index.html", //이거 작성 꼭 할 것. 안하면 에러남
    }),
  ],
  module: {
    //모듈 연결 설정
    rules: [
      {
        test: /\.js$/, // 대상 설정 정규식
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"), //깃허브 배포 위해 docs 설정
    clean: true,
  },
};
