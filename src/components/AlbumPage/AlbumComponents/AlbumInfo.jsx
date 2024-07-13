import React from 'react'

const AlbumInfo = ({ albumName, albumArtist, albumType, albumRelease }) => {

    return (
        <div id="album-info" className='flex flex-col gap-2 md:hidden'>
            <div>
                <h1 className='text-2xl font-extrabold'>{albumName}</h1>
            </div>

            <div>
                <img src=""></img>
                <h1 className='text-sm'>{albumArtist}</h1>
            </div>

            <div className='flex gap-2 text-sm text-gray-500'>
                <p>{albumType}</p>
                <p>{albumRelease}</p>
            </div>
        </div>
    )
}

export default AlbumInfo