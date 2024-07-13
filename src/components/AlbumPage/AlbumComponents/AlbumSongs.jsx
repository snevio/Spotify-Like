import React from 'react'
import ModalItem from '../../CustomCards/ModalItem'
import { useOutletContext } from 'react-router-dom';

const AlbumSongs = ({ albumTracks, albumImage }) => {

    const { setSong, songName, setSongName } = useOutletContext();

    return (
        <div id="album_tracks" className='flex flex-col gap-5 justify-between'>
            {albumTracks.map((albumTrack, index) => {
                return (
                    <div className='flex justify-between rounded-xl p-2 hover:bg-white hover:bg-opacity-10' onClick={() => {

                        setSong(albumTrack.preview_url)
                        setSongName(albumTrack.name)

                    }}>


                        <div key={albumTrack.name} className='flex flex-col  gap-1 flex-1'>
                            <div className='w-full'>
                                <p className={`relative text-sm  text-ellipsis md:w-full overflow-hidden ${songName == albumTrack.name ? 'text-green-700 after:content-[""] after:bg-[url("/src/assets/audio.gif")]  after:bg-contain after:w-10 after:h-10 after:-bottom-4 after:absolute  after:bg-transparent' : ''}`}>{albumTrack.name}</p>
                            </div>
                            <div className='flex gap-5'>
                                {albumTrack.artists.map((artist, index) => {
                                    return (
                                        <p className='text-xs text-gray-400'>{artist.name}</p>
                                    )
                                })}
                            </div>
                        </div>

                        <ModalItem itemImage={albumImage} itemName={albumTrack.name} itemArtist={albumTrack.artists[0].name} itemId={albumTrack.id} />

                    </div>
                )
            })}
        </div>
    )
}

export default AlbumSongs