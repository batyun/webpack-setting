const path = require("path")

module.exports = {
  entry:{
    main: "./src/main.js" // 웹팩 실행되는 곳으로부터
  },
  mode: "production",
  output:{
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"), // 지금 이 파일로부터
    publicPath: "/"
  },
}