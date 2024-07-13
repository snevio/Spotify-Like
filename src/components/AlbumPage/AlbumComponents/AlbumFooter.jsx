import React from 'react'

const AlbumFooter = ({ albumRelease, albumArtist, albumCopyright }) => {

    return (
        <div className='flex flex-col gap-6 relative'>
            <div id="to-split-later-artist-and-date" className='flex flex-col gap-4 before:absolute before:top-[-1rem] before:w-full before:h-[0.1rem] before:bg-gray-500 before:text-white '>
                <p>{albumRelease}</p>
                <p>{albumArtist}</p>
            </div>

            <div id="to-split-later-recommended">
                <p>Recommended</p>
            </div>

            <div id="to-split-later-label" className='flex gap-3'>
                <p>{albumCopyright}</p>

            </div>
        </div >
    )
}

export default AlbumFooter