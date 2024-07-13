import React from 'react'
import { IoHome, IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { LuLibrary } from "react-icons/lu";

export const SmartphoneBar = () => {
    return (
        <div id="smartphone-bar-wrapper" className=' flex justify-center items-center gap-20 fixed w-full left-0 bottom-0 h-20 z-10 p-3 bg-gradient-to-t from-black to-transparent md:hidden'>

            <section>
                <IoHome size={25} />
            </section>

            <section>
                <Link to="/search">
                    <IoSearchSharp size={25} />
                </Link>
            </section>

            <section>
                <Link to="/library">
                    <LuLibrary size={25} />
                </Link>
            </section>

        </div>
    )
}

export default SmartphoneBar
