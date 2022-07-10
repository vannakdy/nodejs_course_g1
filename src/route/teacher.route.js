
const teacher = (app) => {
    const router = require("express").Router();
    const teacher_controller = require("../controller/teacher.controller")

    router.get("/api/teacher",teacher_controller.getAll)
    router.get("/api/teacher/:id",teacher_controller.getOne)
    router.post("/api/teacher",teacher_controller.create)
    router.delete("/api/teacher",teacher_controller.remove)
    router.put("/api/teacher",teacher_controller.edit)

    app.use(router)

}

module.exports = teacher