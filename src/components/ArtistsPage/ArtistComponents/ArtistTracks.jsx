import React, { useEffect, useState } from 'react'
import ModalItem from '../../CustomCards/ModalItem';
import { useOutletContext } from 'react-router-dom';




const ArtistTracks = ({ artistTracks, artistName }) => {

    const [popularTracks, setPopularTracks] = useState("");
    const { setSong, songName, setSongName } = useOutletContext();


    useEffect(() => {
        if (artistTracks) {
            setPopularTracks(artistTracks.tracks.sort((trackPrev, trackNext) => trackNext.popularity - trackPrev.popularity))     //Switch trackNext and trackPrev makes them order from smaller value.
        }
    })

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Top Tracks</h1>

            {popularTracks ?

                popularTracks.map((track, index) => {
                    return (
                        <div className='flex gap-4 items-center p-2 rounded-lg hover:bg-white hover:bg-opacity-10' key={track.name} onClick={() => {

                            setSong(track.preview_url)
                            setSongName(track.name)

                        }}>

                            <p>{index}</p>
                            <div className='w-full'>
                                <div className='flex items-center gap-4'>
                                    <img src={track.album.images[2].url}></img>

                                    <div className='w-full'>
                                        <p className={`relative text-sm line-clamp-2 text-ellipsis overflow-hidden ${songName == track.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:absolute after:z-10 after:bg-transparent' : ''}`} >{track.name}</p>
                                        <p className='text-gray-500'>{track.album.release_date.slice(0, 4)}</p>
                                    </div>
                                </div>
                            </div>

                            <ModalItem itemImage={track.album.images[1].url} itemName={track.name} itemArtist={artistName} itemId={track.id} />
                        </div>

                    )
                })

                : <p>Loading</p>}


        </div >
    )
}

export default ArtistTracks