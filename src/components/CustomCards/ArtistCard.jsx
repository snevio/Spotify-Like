import React from 'react'
import { Link } from 'react-router-dom'

const ArtistCard = ({ artistImage, artistName, artistId }) => {
    return (
        <Link to={'/artist/' + artistId} key={artistId}>
            <div className='group relative p-1 transition-all bg-gray-500  bg-opacity-10 rounded-xl hover:opacity-60'>
                <div className='w-28 h-28 bg-white rounded-full overflow-hidden mb-2 md:w-40 md:h-40'>
                    <img src={artistImage}></img>
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <p className='w-32 text-center whitespace-nowrap text-ellipsis overflow-hidden'>{artistName}</p>
                </div>
            </div>
            <div className='h-3' ></div>  {/* This div is made for spacing the context  from the scrollbar */}
        </Link>
    )
}

export default ArtistCard