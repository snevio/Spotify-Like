import React from 'react'
import { Link } from 'react-router-dom'
import PlaylistCard from '../../CustomCards/PlaylistCard'

const ArtistPlaylist = ({ artistPlaylist, artistName }) => {

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Related to {artistName} </h1>
            <div id="artist_playlist_wrapper" className='flex gap-4 overflow-auto'>
                {artistPlaylist ?

                    artistPlaylist.playlists.items.map((playlist, index) => {
                        return (

                            <PlaylistCard playlistImage={playlist.images[0]?.url} playlistName={playlist.name} playlistId={playlist.id} key={playlist.id} />

                        )
                    })

                    : <p>Loading</p>}


            </div>
        </div>
    )
}

export default ArtistPlaylist