import React from 'react'

const PlaylistSearchBar = ({ handlePlaylistSearch }) => {
    return (

        <div id="searchbar_wrapper" className="flex justify-center gap-3 pt-10 pb-10 pl-6 pr-6">

            <div>
                <input placeholder='Search inside the playlist' className='p-1 rounded-md text-white items-center  bg-gray-50 bg-opacity-10'
                    onChange={(e) => handlePlaylistSearch(e.currentTarget.value.toString())}>
                    {/* e.currentTarget.value.toString()[0]?.toUpperCase() + e.currentTarget.value.slice(1)) */}
                </input>
            </div>
            <button className='p-1 rounded-md text-white items-center  bg-gray-50 bg-opacity-10'>Order</button>

        </div>
    )
}

export default PlaylistSearchBar