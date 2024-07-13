
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaylistBanner from './PlaylistComponents/PlaylistBanner';
import PlaylistInfo from './PlaylistComponents/PlaylistInfo';
import PlaylistSongs from './PlaylistComponents/PlaylistSongs';
import PlaylistSearchBar from './PlaylistComponents/PlaylistSearchBar';
import { useFetchPlaylist } from '../../customHooks/useFetchPlaylist';
import { checkToken } from '../../customHooks/checkToken';


const PlaylistPage = () => {

    checkToken();

    /**PARAMS FROM THE URL */

    const params = useParams();
    const playlistId = params.id;

    /**CUSTOM HOOK FOR FETCHING DATA */

    const playlistData = useFetchPlaylist(playlistId)


    /**FILTER VARIABLES */

    const [search, setSearch] = useState("")
    const [filteredSongs, setFilteredSongs] = useState("")

    //This is the filter for the Playlist Search component. At the moment only filters by songs title,
    // but need to make it filter even by artist as playlist can have multiple artists.

    const handlePlaylistSearch = (searchInput) => {

        var updateList = [...playlistData.tracks.items]

        updateList = updateList.filter((item, index) => {
            return item.track.name.indexOf(searchInput) !== -1
        })

        setSearch(searchInput)
        setFilteredSongs(updateList)
        // console.log(search)
        // console.log(updateList)
    }


    return (
        <div id="playlist_wrapper" className='md:flex'>

            {playlistData ?
                <div className='md:w-full'>

                    <div id="playlist_wrapper">
                        <PlaylistSearchBar handlePlaylistSearch={handlePlaylistSearch} />

                        <PlaylistBanner image={playlistData.images[0].url} />
                        <div className='flex flex-col gap-7 p-4'>
                            <PlaylistInfo playlistLenght={playlistData.tracks.total} tracks={playlistData.tracks.items} playlistName={playlistData.name} playlistDescription={playlistData.description} />
                            <PlaylistSongs tracks={playlistData.tracks.items} filteredSongs={filteredSongs} search={search} />

                        </div>
                    </div>

                </div> : <p>Loading</p>}

        </div>
    )
}

export default PlaylistPage