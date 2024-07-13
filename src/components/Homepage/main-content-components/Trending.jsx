import React, { useContext } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext';
import { MdPlayCircleOutline } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';

export const Trending = () => {

    const { userSavedTracks } = useContext(LoginContext)

    const { setSong, songName, setSongName } = useOutletContext();


    return (
        <div id="trending_wrapper" className='flex-1'>
            <h1 className='text-3xl font-semibold mb-3'>Liked tracks</h1>

            <div id="trending_song_wrapper" className=''>

                {userSavedTracks ?

                    userSavedTracks.items.map((item, index) => {
                        return <div key={index} className='flex gap-3 mb-3 bg-black bg-opacity-10 rounded-md' onClick={() => {
                            setSong(item.track.preview_url)
                            setSongName(item.track.name)

                        }}>
                            <div className=' bg-white rounded-xl'>
                                <img src={item.track.album.images[2].url}></img>
                            </div>
                            <div className='w-full items-center flex flex-1 justify-between'>
                                <div className='w-full'>
                                    <p className={`relative text-lg  text-ellipsis md:w-full overflow-hidden ${songName == item.track.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:right-0 after:absolute  after:bg-transparent' : ''}`}>{item.track.name}</p>
                                    <p>{item.track.artists[0].name}</p>
                                </div>

                            </div>
                        </div>

                    }) : <p>Loading</p>}
            </div>
        </div>
    )
}


export default Trending