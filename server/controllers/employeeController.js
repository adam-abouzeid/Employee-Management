const Employee = require("../models/employeeModel")

const getEmployees = async (req,res) => {
    const emps = await Employee.find()
    res.status(200).json(emps)
}
const createEmployee = async (req,res) => {
    const {name, age} = req.body;
    if (!name || !age) {
        res.status(400).json({message: "Please add all fields"})
      }
    // check if already exists
    const employeeExists = await Employee.find({name:name})
    
    if (employeeExists.length ===0){
        const employee = await Employee.create({
            name:name, 
            age:age
        })
        res.status(200).json(employee)
        
    }else {
        res.status(400).json({message: "Employee Already exists"})
    }

    
}
const updateEmployee = async(req,res) => {
    const employee = Employee.findById(req.params.id)
    if(!employee){
        res.status(400).json({message: "employee not found"})
    }else {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedEmployee)
    }
}

const deleteEmployee = async (req,res) => {
    const employee = Employee.findById(req.params.id)
    if(!employee){
        res.status(400).json({message: "employee not found"})
    }else {
        await employee.remove()
        res.status(200).json({id: req.params.id})
    }
    
}


module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee

}