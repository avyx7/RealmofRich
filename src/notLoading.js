import React from 'react'
import { Outlet } from 'react-router-dom'

function NotLoading() {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default NotLoading;