import React, { useEffect } from 'react'
import { useGetUserArtist } from '../../../customHooks/useGetUserArtist'
import { useGetUserAlbums } from '../../../customHooks/useGetUserAlbums';
import { Link, useParams } from 'react-router-dom';
import { useGetArtistDetails } from '../../../customHooks/useGetArtistDetails';

const SidebarLibrary = () => {

    const { artistId } = useParams();



    const followedArtist = useGetUserArtist();
    const followedAlbums = useGetUserAlbums();

    return (
        <div className='flex flex-col gap-2 overflow-auto'>
            <Link to="/library/" className='w-full h-32'>
                <p>My Library</p>
            </Link>

            <div id='second_sec' className='flex flex-col overflow-auto'>



                <div className='flex flex-col gap-3'>
                    {followedArtist ?

                        followedArtist.artists.items.map((artist) => {

                            return (
                                <Link to={"/artist/" + artist.id} className='flex gap-3' key={artist.name}>

                                    <div className='w-[50px] h-[50px] rounded-full overflow-hidden'>
                                        <img src={artist.images[1].url} className='w-full h-full'></img>
                                    </div>

                                    <div className='flex flex-col justify-center gap-1'>
                                        <p className='text-sm font-bold whitespace-wrap text-ellipsis overflow-hidden '>{artist.name}</p>
                                        <p className='text-gray-500'>Artist</p>
                                    </div>

                                </Link  >

                            )
                        }
                        )

                        : null}

                    {followedAlbums ?

                        followedAlbums.items.map((albumItem) => {
                            return (

                                <Link to={"/album/" + albumItem.album.id} className='flex gap-3' key={albumItem.album.name}>
                                    <div className='w-[45px] h-[45px]'>
                                        <img src={albumItem.album.images[1].url} className='w-full h-full object-cover'></img>
                                    </div>

                                    <div className='flex flex-col justify-center gap-1 w-[300px]'>
                                        <div className='text-sm whitespace-nowrap text-ellipsis overflow-hidden'>{albumItem.album.name}</div>
                                        <div className='text-gray-500'>Album</div>
                                    </div>
                                </Link>
                            )

                        })

                        : null}

                </div>
            </div>
        </div>
    )
}

export default SidebarLibrary