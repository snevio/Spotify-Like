import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistCard = ({ playlistImage, playlistName, playlistId }) => {
    return (
        <Link to={"/playlist/" + playlistId}>

            <div className='p-1 flex flex-col items-center gap-2  bg-gray-500 bg-opacity-10 rounded-md' key={playlistName}>

                <div className='w-32 h-32 bg-white rounded-xl overflow-hidden md:w-40 md:h-40'>
                    <img src={playlistImage}></img>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex justify-center w-full md:w-44 overflow-hidden'>
                        <p className='w-36 text-sm font-bold whitespace-nowrap text-ellipsis  overflow-hidden text-center'>{playlistName}</p>
                    </div>
                    <div>
                        <p className='text-xs white text-gray-500'>Playlist</p>
                    </div>
                </div>

            </div>
            <div className='h-3' ></div>
        </Link>
    )
}

export default PlaylistCard