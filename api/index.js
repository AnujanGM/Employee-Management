const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

// Endpoint to add employee
app.post("/addEmployee", async (req, res) => {
    try {
        const {
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        } = req.body;

        const newEmployee = new Employee({
            employeeName,
            employeeId,
            designation,
            phoneNumber,
            dateOfBirth,
            joiningDate,
            activeEmployee,
            salary,
            address,
        });

        await newEmployee.save();
        res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
    } catch (error) {
        console.log('Error creating employee', error);
        res.status(500).json({ message: "Failed to add an employee" });
    }
});

// Endpoint to fetch all employees
app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees); 
    } catch (error) {
        console.log("Failed to retrieve employees", error);
        res.status(500).json({ message: "Failed to retrieve employees" });
    }
});