const express = require("express");
const { getEmployees, getSingleEmployee,createEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");
const router = express.Router();


router.get("/", getEmployees)
router.get("/:id", getSingleEmployee)
router.post("/", createEmployee)
router.put("/:id", updateEmployee)
router.delete("/:id", deleteEmployee)

module.exports = router