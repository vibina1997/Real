import React from 'react'
import AdminDashboard from './AdminDashboard'
import AdminLayout from './AdminLayout'
import PropertyTable from './PropertyTable'
import Sidebar from './Sidebar'
import StatCard from './StatCard'
import Topbar from './Topbar'

const Dashmain = () => {
  return (
    <div>
      <AdminDashboard />
      <AdminLayout />
      <PropertyTable />
      <Sidebar/>
      <StatCard/>
      <Topbar/>
    </div>
  )
}

export default Dashmain
