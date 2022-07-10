
const express = require("express")
const borderPaser = require("body-parser")
const app = express();

app.use(borderPaser.json())
app.use(borderPaser.urlencoded({extended:false}))

require("./src/route/student.route")(app)
require("./src/route/teacher.route")(app)

app.listen(8080,()=>{
    console.log("Server listen localhost:8080")
})
