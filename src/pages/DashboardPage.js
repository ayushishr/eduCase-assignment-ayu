import React, { useEffect } from 'react'
import DashboardPageComponent from '../components/DashboardPageComponent'

function DashboardPage() {
    useEffect(()=>{
        document.title = `PopX -  Welcome to PopX Dashboard`
    },[])
    return (
        <DashboardPageComponent />
    )
}

export default DashboardPage
