require('./main.css')
require('./index.html')

var a = async() => {
  await console.log("wait here!")
  await console.log("Done~!!")
}

a()
