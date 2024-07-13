import React, { useEffect, useState } from 'react'

const PlaylistInfo = ({ playlistLenght, playlistName, playlistDescription }) => {


    return (
        <div className='flex flex-col gap-2'>

            <h1 className='font-bold text-xl'>{playlistName}</h1>
            <p className='text-gray-500 text-xs'>{playlistDescription}</p>
            <p className='text-gray-500'>{playlistLenght} tracks</p>

        </div>
    )
}

export default PlaylistInfo