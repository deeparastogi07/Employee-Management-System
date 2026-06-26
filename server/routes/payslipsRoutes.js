import { Router } from "express"
import { protect, protectAdmin } from "../middleware/Auth.js"
import { createPayslip, getPayslip, getPayslipById } from "../controllers/payslipController.js"

const payslipRouter = Router()

payslipRouter.post("/", protect, createPayslip)
payslipRouter.get("/", protect, getPayslip)
payslipRouter.get("/:id", protect, protectAdmin, getPayslipById)

export default payslipRouter