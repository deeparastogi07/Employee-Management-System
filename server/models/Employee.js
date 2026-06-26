import mongoose from "mongoose";
import { DEPARTMENTS } from "../constants/departments.js";

const employeeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    basicSalary: {
        type: Number,
        default: 0
    },
    allowances: {
        type: Number,
        default: 0
    },
    deductions: {
        type: Number,
        default: 0
    },
    employmentStatus: {
        type: String,
        default: "ACTIVE",
        enum: ["ACTIVE", "INACTIVE"]
    },
    joinDate: {
        type: Date,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: false
    },
    Bio: {
        type: Date,
        default: ""
    },
    department: {
        type: String,
        enum: DEPARTMENTS
    }
}, {timestamps: true})

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema)

export default Employee;