import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
    <div>AdminLayout</div>
    <Outlet/>
    </>
  )
}

export default AdminLayout