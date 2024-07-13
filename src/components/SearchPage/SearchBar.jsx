import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";


export const SearchBar = ({ handleSearchResult }) => {

    const SEARCH_ENDPOINT_START = "https://api.spotify.com/v1/search?q="
    const SEARCH_ENDPOINT_VALUES = "&type=album,artist,track,playlist"
    const [searchValue, setSearchValue] = useState();


    const parameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }

    }

    const handleButtonClick = async () => {

        await axios.get(SEARCH_ENDPOINT_START + searchValue + SEARCH_ENDPOINT_VALUES, parameters)

            .then((res) => {
                handleSearchResult(res.data)    //Passing result to Search Page via inversed props.
                console.log(res.data)


            }).catch((error) => {
                console.log(error)
            })

    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)

    }

    //REMOVE THE WHOLE SEARCH BAR AND TRY WITHA SIMPLE INPUT BOX

    return (

        <div className='flex justify-center items-center w-full h-full bg-gray-600'>
            <IoIosArrowRoundBack size={45} />
            <input type='text' placeholder='Search for a song or an artist...' className=' w-full h-full p-5 bg-gray-600' onChange={handleSearch}></input>
            <button onClick={handleButtonClick}>Search</button>

        </div >
    )
}

export default SearchBar
