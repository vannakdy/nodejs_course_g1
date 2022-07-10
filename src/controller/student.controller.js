
const create = (req,res) => {
    res.send("Create student")
}

const getList = (req,res) => {
    res.send("getList student")
}


const getOne = (req,res) => {
    res.send("getOne student")
}

const remove = (req,res) => {
    res.send("remove student")
}

const edit = (req,res) => {
    res.send("edit student")
}


module.exports = {
    create,
    getList,
    getOne,
    remove,
    edit
};