import { Router } from "express"
import { protect } from "../middleware/Auth.js"
import { dashboard } from "../controllers/DashboardController.js"

const dashboardRouter = Router()

dashboardRouter.get("/", protect, dashboard)

export default dashboardRouter