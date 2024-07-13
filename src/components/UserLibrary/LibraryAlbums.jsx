import React from 'react'
import { Link } from 'react-router-dom'

const LibraryAlbums = ({ followedAlbums }) => {
    return (
        <div className='flex flex-col gap-4'>
            {followedAlbums ?

                followedAlbums.items.map((albumItem) => {
                    return (

                        <Link to={"/album/" + albumItem.album.id} className='flex gap-3'>
                            <div className='w-[80px] h-[80px]'>
                                <img src={albumItem.album.images[1].url} className='w-full h-full object-cover'></img>
                            </div>
                            <div className='flex flex-col justify-center gap-1'>
                                <div>{albumItem.album.name}</div>
                                <div className='text-gray-500'>Album</div>
                            </div>
                        </Link>
                    )

                })

                : null}
        </div>
    )
}

export default LibraryAlbums