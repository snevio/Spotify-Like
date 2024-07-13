import React, { useContext } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext'
import { Link } from 'react-router-dom'
import PlaylistCard from '../../CustomCards/PlaylistCard'

export const UserPlaylist = () => {

    const { userPlaylist } = useContext(LoginContext)
    //console.log(userPlaylist)
    return (

        <div id="playlist_section_wrapper">
            <h1 className='text-3xl font-semibold mb-3'>Your Playlists</h1>
            <div id="playlist_wrapper" className='flex gap-4 overflow-auto'>

                {userPlaylist ?
                    userPlaylist.items.map((playlist) => {
                        return (

                            <PlaylistCard playlistImage={playlist.images[0]?.url} playlistName={playlist.name} playlistId={playlist.id} key={playlist.name} />


                        )
                    })

                    : <p>Loading</p>}


            </div>
        </div>


    )
}

export default UserPlaylist
