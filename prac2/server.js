var express = require("express") ///require is a function in node.js, express is a web framework
var app = express() ///var app represents web server application
var port = process.env.port || 3000; ///where we define the port number
 
app.listen(port, () => { ///start listening, start the server
    console.log("App listening to: " + port)
})