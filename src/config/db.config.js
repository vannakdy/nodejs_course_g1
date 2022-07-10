
const mysql = require("mysql");

const db = mysql.createConnection({
    host : "localhost",
    // host: "http://192.168.88.34",
    database : "nit_course_db",
    port : 3306,
    user : "root",
    password : "",
    multipleStatements : true // false
})

db.connect()

module.exports = db;