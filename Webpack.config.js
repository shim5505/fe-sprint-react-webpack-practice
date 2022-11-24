const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

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
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin(),
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
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"), //깃허브 배포 위해 docs 설정
    clean: true,
  },
};
