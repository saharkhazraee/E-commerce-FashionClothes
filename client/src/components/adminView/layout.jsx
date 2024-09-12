import React, { useState } from 'react'
import AdminSideBar from './sideBar'
import AdminHeader from './header'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
    const [openSideBar,setOpenSideBar]=useState(false)
    return (
        <div className='flex min-h-screen w-full'>
            <AdminSideBar open={openSideBar} setOpen={setOpenSideBar} />
            <div className="flex flex-1 flex-col">
                <AdminHeader  setOpen={setOpenSideBar} />
                <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6">
                    <Outlet />
                </main>
            </div>ّ
        </div>
    )
}
