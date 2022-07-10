const db = require("../config/db.config");

const getAll = (req,res) => {
    db.query("SELECT * FROM teacher",(err,result)=>{
        if(err){
            res.json({
                error:true,
                message : err
            })
        }else{
            res.json({
                list:result
            })
        }
        
    })
}
const getOne = (req,res) => {
    var id = req.params.id;
    // case // delete
    // var id ="1; DELETE FROM teacher where teacher_id = 2"
    // var sqlSelect = "SELECT * FROM teacher WHERE teacher_id = "+id;

    var sqlSelect = "SELECT * FROM teacher WHERE teacher_id = ?";    
    db.query(sqlSelect,[id],(err,result)=>{
        if(err){
            res.json({
                error: true,
                message : err
            })
        }else{
            res.json({
                list: result,
            })
        }
    })
    
}
const create = (req,res) => {
    var body = req.body
    var fname = body.fname
    var lastname = body.lastname
    var gender = body.gender
    var tel = body.tel
    var email = body.email
    var description = body.description
    
    var sql = " INSERT INTO `teacher`( `fname`, `lastname`, `gender`, `tel`, `email`, `description`) VALUES (?,?,?,?,?,?) ";
    db.query(sql,[fname,lastname,gender,tel,email,description],(err,result)=>{
        if(err){
            res.json({
                error : true,
                message : err
            })
        }else{
            res.json({
                message : "Insert success",
                data : result,
            })
        }
    })
}
const remove = (req,res) => {
    var body = req.body;
    var teacher_id = body.teacher_id
    if(teacher_id == null || teacher_id == ""){
        res.json({
            error : true,
            message : "Param teacher id require!"
        })
    }else{
        var sql = "DELETE FROM teacher WHERE teacher_id = ?";
        db.query(sql,[teacher_id],(err,result)=>{
            if(err){
                res.json({
                    error : true,
                    message : err
                })
            }else{
                res.json({
                    message : "Delete success!",
                    data : result
                })
            }
        })
    } 
    
    
}
const edit = (req,res) => {
    
}

module.exports = {
    getAll,
    getOne,
    create,
    remove,
    edit
}