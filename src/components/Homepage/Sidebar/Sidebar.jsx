import React, { useCallback, useState } from 'react'
import SidebarTop from './SidebarTop';
import SidebarLibrary from './SidebarLibrary';
import { useMotionValue } from 'framer-motion';
import { motion } from 'framer-motion'

export const Sidebar = () => {


    return (
        <div className='hidden  border-black  md:h-[calc(100vh)]) md:sticky md:block md:w-96 border md:top-0 md:rounded-xl ' id="sidebar">



            <div id="nav_wrapper" className='p-4 flex flex-col h-full min-w-56 gap-4 bg-green '>

                <SidebarTop />
                <SidebarLibrary />
            </div>

        </div>
    )
}

export default Sidebar
