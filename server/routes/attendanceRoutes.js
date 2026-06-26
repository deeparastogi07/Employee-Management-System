import { Router } from "express"
import { protect } from "../middleware/Auth";
import { clockInOut, getAttendance } from "../controllers/AttendanceController";

const attendanceRouter = Router();

attendanceRouter.post("/", protect, clockInOut)
attendanceRouter.get("/", protect, getAttendance)

export default attendanceRouter