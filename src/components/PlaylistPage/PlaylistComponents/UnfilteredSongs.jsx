import React from 'react'
import ModalItem from '../../CustomCards/ModalItem';
import { useOutletContext } from 'react-router-dom';

const UnfilteredSongs = ({ tracks, updateModalStatus, switchModal, getTrackOpt }) => {

    const { setSong, songName, setSongName } = useOutletContext();

    return (
        <div className='flex flex-col gap-3'>
            {tracks.map((track, index) => {
                return (

                    <div className='flex justify-between p-2 rounded-lg hover:bg-white hover:bg-opacity-10' key={index} onClick={() => {
                        setSong(track.track.preview_url)
                        setSongName(track.track.name)
                    }}>
                        <div className='flex flex-1  gap-2'>
                            <div id="img_wrapper" className='w-[64px] h-[64px]'>
                                <img src={track.track.album.images[2]?.url} className='w-full h-full object-cover'></img>
                            </div>

                            <div className='flex flex-col justify-center w-full'>
                                <p className={`relative text-sm line-clamp-2 text-ellipsis overflow-hidden  ${songName == track.track.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:absolute  after:bg-transparent' : ''}`}>{track.track.name}</p>
                                <p className='text-gray-500 flex gap-2'>
                                    {track.track.artists.map((artist) => {

                                        return (
                                            <p key={artist.name}>{artist.name}</p>
                                        )
                                    })}
                                </p>
                            </div>
                        </div>

                        <ModalItem itemImage={track.track.album.images[1]?.url} itemName={track.track.name} itemArtist={track.track.artist} itemId={track.track.id} />

                    </div>


                )
            })}
        </div>
    )
}

export default UnfilteredSongs