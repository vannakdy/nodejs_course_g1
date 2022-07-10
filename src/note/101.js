const connect = mysql.createConnection({
    host : "localhost",
    // host: "http://192.168.88.34",
    database : "nodejs002",
    port : 3306,
    user : "root",
    password : ""
})
// test connection nodejs + databases
connect.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connect success!");
    }
});

app.get("/",(req,res)=>{
    res.end("Welcom Node Sever")
    res.json(result)
})

app.get("/api/student",(req,res)=>{
    var obj = {
        url : req.url,
        params : req.params,
        body : req.body,
        headers : req.headers,
        method : req.method
    }
    res.json(obj)
    return 
    const body = req.body
    connect.query("SELECT * FROM student WHERE student_id = "+body.id,(err,result)=>{
        if(!err){
            res.json(result)
        }else{
            console.log(err)
        }
    })
})
