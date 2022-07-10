
const student = (app) => {
    
    const route = require("express").Router();
    const student_controller = require("../controller/student.controller")

    route.get("/api/student",student_controller.getList)
    route.get("/api/student/:id",student_controller.getOne)
    route.post("/api/student",student_controller.create)
    route.delete("/api/student",student_controller.remove)
    route.put("/api/student",student_controller.edit)

    app.use(route)

}

module.exports = student