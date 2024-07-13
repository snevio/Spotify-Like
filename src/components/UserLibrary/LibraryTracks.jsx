import React, { useState } from 'react'
import { IoHeartSharp } from "react-icons/io5";
import getUserSavedTracks from '../../customHooks/getUserSavedTracks';
import { useDislikeTrack } from '../../customHooks/useDislikeTrack';
import { useOutletContext } from 'react-router-dom';

export const LibraryTracks = () => {

    const [reload, setReload] = useState([])

    const { setSong, songName, setSongName } = useOutletContext();

    const tracks = getUserSavedTracks();

    function handleDislike(id) {
        useDislikeTrack(id)
    }

    return (



        <div className='flex flex-col gap-4  '>
            <div id="top" className='bg-gradient-to-t from-[rgba(0,0,0,0.05)] to-blue-500 '>
                <div className='flex justify-center items-center w-100 h-32 text-5xl '>
                    <p>Saved Tracks</p>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                {tracks ?
                    tracks.items.map((track) => {
                        return (



                            <div id="item-wrapper" className='flex justify-between' onClick={() => {
                                setSong(track.track.preview_url)
                                setSongName(track.track.name)
                            }}>

                                <div className='flex gap-3'>

                                    <div id="img-wrapper">
                                        <img src={track.track.album.images[2].url}></img>
                                    </div>

                                    <div className='flex flex-col justify-center'>
                                        <div className='w-52'>
                                            <p className={`relative text-sm text-ellipsis overflow-hidden ${songName == track.track.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:absolute  after:bg-transparent' : ''}`}>{track.track.name}</p>
                                        </div>
                                        <div>
                                            <p className='text-gray-500 text-sm'>{track.track.artists[0].name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <IoHeartSharp size={28} fill='green' onClick={() => {
                                        handleDislike(track.track.id)
                                        setReload(...reload)

                                    }} />
                                </div>


                            </div >
                        )
                    })




                    : <p>Loading</p>}
            </div>

        </div >
    )
}
