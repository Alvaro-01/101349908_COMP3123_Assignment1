const empModel = require('../models/Employee.js');
const userModel = require('../models/User.js');
const express = require("express")
const routes = express.Router() 
//user signup
routes.post('/user/signup', async(req, res) => {
    // Validate request
    try{
        var newUser = new userModel({
            ...req.body
        })
        await newUser.save()
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json(error)
    }
    
});
// user login
routes.post('/user/login', async(req, res) => {
    // Validate request
    try{
        var newUser = new userModel({
            ...req.body
        })
        await newUser.save()
        res.status(200).json(newUser)
    }catch(error){
        res.status()
    }
    
});
//TODO - Retrieve all emps
routes.get("/emp/employees", async(req, res) => {
    try{
         var empList = await empModel.find()
         res.status(200).json(empList)
    }catch(error){
        res.status()
        
    }
 
})
//TODO add employee
routes.post("/emp/employees", async(req, res) => {
    try{
        var newEmp = new empModel({
            ...req.body
        })
        await newEmp.save()
        res.status(201).json(newEmp)
    }catch(error){
        res.status()
    }
 
})

//TODO - Retrieve a single employee
routes.get('/emp/employees/:eid', async(req, res) => {
    try {
        if(req.params.eid == undefined){
            res.status(400).send({
                status: false,
                message: "Object book required to be JSON formant"
            })
        }
        var emp = await empModel.findById(req.params.eid)
        res.status(200).json(emp)
    } catch (error) {
        res.status(400).json(error)
    }
    
});

//TODO update employee info
routes.put("/emp/employees/:eid", async(req, res) => {
    try {
        if(req.params.eid == undefined){
            res.status(500).send({
                status: false,
                message: "Object book required to be JSON formant"
            })
        }
        const updatedEmp = await empModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).json(updatedEmp)
    } catch (error) {
        res.status(500).json(error)
    }
    
    
})

//TODO delete employee
routes.delete('/emp/employees?eid=xxx', async (req, res) => {
    try{
        if(req.params.noteId == undefined){
            res.status(500).send({
                status: false,
                message: "Object book required to be JSON formant"
            })
        }
       
        
        const emp = await empModel.findOneAndDelete(req.params.eid)
        if(!note){
            res.status(200).send({message: "Employee Not found"})
        }else{
            res.status(204).send(emp)
        }
    }catch(error){
        res.status(500).send(error)
    }
});




//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put("/notes/:noteId", async(req, res) => {
    try {
        if(req.params.noteId == undefined){
            res.status(500).send({
                status: false,
                message: "Object book required to be JSON formant"
            })
        }
        const updatedNote = await noteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(200).json(updatedNote)
    } catch (error) {
        res.status(500).json(error)
    }
    
    
})

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    try{
        if(req.params.noteId == undefined){
            res.status(500).send({
                status: false,
                message: "Object book required to be JSON formant"
            })
        }
       
        
        const note = await noteModel.findOneAndDelete(req.params.noteId)
        if(!note){
            res.status(200).send({message: "Book Not found"})
        }else{
            res.status(200).send(note)
        }
    }catch(error){
        res.status(500).send(error)
    }
});


module.exports = routes