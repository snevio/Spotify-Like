import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SidebarTop = () => {
    return (

        <div id="first_sec" className='grow-0 flex flex-col gap-2'>
            <Link to="/home" className='flex gap-4'>
                <IoHome size={30} />
                <p>Home</p>
            </Link>

            <section className='flex gap-4'>
                <IoSearchSharp size={30} />
                <Link to="/search">Search</Link>
            </section>
        </div>
    )
}

export default SidebarTop