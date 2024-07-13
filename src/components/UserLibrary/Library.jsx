import React from 'react'
import { useGetUserArtist } from '../../customHooks/useGetUserArtist'
import { useGetUserAlbums } from '../../customHooks/useGetUserAlbums'
import LibraryArtist from './LibraryArtist'
import LibraryAlbums from './LibraryAlbums'
import { Link } from 'react-router-dom'
import { checkToken } from '../../customHooks/checkToken'

const Library = () => {

    checkToken();

    const followedArtist = useGetUserArtist()
    const followedAlbums = useGetUserAlbums()

    console.log(followedAlbums)

    return (
        <div id='libary-wrapper'>

            <div id="top" className='flex justify-center'>
                <div className='w-100 h-32 text-5xl'>My Library</div>
            </div>

            <div className='p-4'>


                <Link to={"/library/tracks"} className='flex mb-4' >
                    <div className='w-[80px] h-[80px] bg-gradient-to-tr from-orange-600 via-green-500 to bg-cyan-500 rounded-xl'></div>
                    <div className='flex justify-center items-center'>
                        <p className=''>Your saved tracks</p>
                    </div>

                </Link>

                <LibraryArtist followedArtist={followedArtist} />
                <LibraryAlbums followedAlbums={followedAlbums} />



            </div >
        </div >



    )
}

export default Library