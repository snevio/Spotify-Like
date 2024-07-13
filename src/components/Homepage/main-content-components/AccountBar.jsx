import React, { useContext } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext'
import { IoIosArrowDown } from "react-icons/io";

export const AccountBar = () => {

    const { userData } = useContext(LoginContext)


    return (
        <div id="top" className='flex justify-between'>
            <h1 className='text-3xl'>Good Evening</h1>

            {userData ?

                <div className='bg-slate-800 rounded-3xl p-2'>
                    <div className='flex gap-3 items-center'>
                        <div className='w-8'>
                            <img src={userData.images[0]?.url} className='rounded-full'></img>
                        </div>
                    </div>
                </div>

                : null}

        </div>

    )
}
