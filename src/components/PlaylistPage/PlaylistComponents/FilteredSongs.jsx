import React from 'react'
import ModalItem from '../../CustomCards/ModalItem';
import { useOutletContext } from 'react-router-dom';

const FilteredSongs = ({ filteredSongs }) => {

    const { setSong, songName, setSongName } = useOutletContext();

    return (
        <div className='flex flex-col gap-3 '>
            {filteredSongs.map((track, index) => {

                return (
                    <div className='flex gap-2 justify-between align-middle items-center rounded-lg p-2 hover:bg-white hover:bg-opacity-10'>
                        <div className='flex justify-center gap-2'>
                            <div id="img_wrapper" className='w-[64px] h-[64px]'>
                                <img src={track.track.album.images[2].url} className='w-full h-full object-fill'></img>
                            </div>

                            <div className='flex flex-1 flex-col justify-center w-full ' onClick={() => {
                                setSong(track.track.preview_url)
                                setSongName(track.track.name)
                            }}>
                                <p className={`relative text-sm text-ellipsis overflow-hidden ${songName == track.track.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:absolute  after:bg-transparent' : ''}`}>{track.track.name}</p>
                                <p className='text-gray-500 flex gap-2'>
                                    {track.track.artists.map((artist) => {

                                        return (
                                            <p>{artist.name}</p>
                                        )
                                    })}

                                </p>
                            </div>
                        </div>

                        <ModalItem itemImage={track.track.album.images[1].url} itemName={track.track.name} itemArtist={track.track.artist} itemId={track.track.id} />

                    </div>

                )
            })}
        </div>

    )
}

export default FilteredSongs