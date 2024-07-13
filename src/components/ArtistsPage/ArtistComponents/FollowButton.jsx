import axios from 'axios'
import React, { useState } from 'react'
import headers from '../../../Contexts/axiosHeader'
import { CiShare2 } from "react-icons/ci";
import { IoPlayCircle } from "react-icons/io5";
import { useFollow } from '../../../customHooks/useFollow';
import { useUnfollow } from '../../../customHooks/useUnfollow';
import Modal from '../../CustomCards/Modal';

const FollowButton = ({ isFollowing, artistId }) => {



    const handleFollow = async () => {
        useFollow(artistId)
    }

    const handleUnfollow = async () => {
        useUnfollow(artistId)
    }

    return (
        <div className='w-full flex justify-between items-center'>
            <div className='flex gap-10 items-center'>
                {isFollowing[0]

                    ?

                    <div id="follow-wrapper">
                        <button onClick={handleUnfollow} className=' rounded-md w-28 h-7 border-gray-500 border-2'>Unfollow</button>
                    </div>

                    :

                    <div id="follow-wrapper">
                        <button onClick={handleFollow} className='bg-green-600 rounded-md w-28 h-7'>Follow</button>
                    </div>
                }

                <CiShare2 size={26} />
            </div>
            <div>
                <IoPlayCircle size={50} color='green' />
            </div>

        </div>
    )
}

export default FollowButton