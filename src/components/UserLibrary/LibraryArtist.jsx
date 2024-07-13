import React from 'react'
import { Link } from 'react-router-dom'

const LibraryArtist = ({ followedArtist }) => {
    return (

        <div className='flex flex-col gap-4'>
            {followedArtist ?
                followedArtist.artists.items.map((artist) => {

                    return (
                        <Link to={"/artist/" + artist.id} className='flex gap-3'>

                            <div className='w-[80px] h-[80px] rounded-full overflow-hidden'>
                                <img src={artist.images[1].url} className='w-full h-full'></img>
                            </div>

                            <div className='flex  flex-col justify-center gap-1'>
                                <p>{artist.name}</p>
                                <p className='text-gray-500'>Artist</p>
                            </div>

                        </Link>

                    )

                }) : null}
        </div>
    )
}

export default LibraryArtist