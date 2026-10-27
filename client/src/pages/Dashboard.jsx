import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import EmployeeDashboard from "../components/EmployeeDashboard"
import AdminDashboard from "../components/AdminDashboard"
import api from "../api/axios"

const Dashboard = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false
        ;(async () => {
            try {
                const { data: dashboard } = await api.get("/dashboard")
                if (!cancelled) setData(dashboard)
            } catch {
                if (!cancelled) setData(null)
            } finally {
                if (!cancelled) setLoading(false)
            }
        })()
        return () => { cancelled = true }
    }, [])

    if(loading) return <Loading />
    if(!data) return <p className="text-center text-slate-500 py-12">Failed to load Dashboard</p>

    if(data.role === "EMPLOYEE"){
        return <EmployeeDashboard data={data}/>
    }else {
        return <AdminDashboard data={data}/>
    }

}

export default Dashboard