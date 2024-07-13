import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext';
import { useOutletContext } from 'react-router-dom';

export const RecentPlays = () => {

    const { myData } = useContext(LoginContext)
    const { setSong, songName, setSongName } = useOutletContext();

    return (

        <div id="recent_wrapper" className=''>
            <h1 className='text-3xl font-semibold mb-2'>TOP PLAYS</h1>

            <div id="recent_song_wrapper" className='grid grid-cols-2 grid-rows-2 gap-3 md:grid-rows-2'>

                {myData ? myData.items.map((item, index) => {
                    return (

                        <div key={index} className='group flex gap-3 transition-all bg-black bg-opacity-10 rounded-sm overflow-hidden  whitespace-nowrap hover:opacity-60' onClick={() => {
                            setSong(item.preview_url)
                            setSongName(item.name)
                        }}>


                            <div className='relative w-16 '>
                                <img src={item.album.images[2].url} className='w-full h-full'></img>
                            </div>

                            <div className='flex flex-col justify-center overflow-hidden '>

                                <div id="main_song_name_wrapper" className='w-full'>
                                    <p className={`font-bold text-sm whitespace-nowrap text-ellipsis overflow-hidden text-center ${songName == item.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:right-0 after:absolute  after:bg-transparent' : ''}`}> {item.name}</p>
                                </div>

                                <div id="main_artist_name_wrapper" className='w-full'>
                                    <p className='text-sm whitespace-nowrap text-ellipsis overflow-hidden'>{item.artists[0].name}</p>
                                </div>

                            </div>
                        </div>

                    )
                }) : <p>Loading</p>}
            </div>
        </div >

    )
}

export default RecentPlays
