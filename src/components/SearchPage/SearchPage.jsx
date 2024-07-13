import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { SearchBody } from './SearchBody'
import { checkToken } from '../../customHooks/checkToken';


export const SearchPage = () => {

    checkToken();

    const [searchResult, setSearchResult] = useState("");
    const [artist, setArtist] = useState("");
    const [type, setType] = useState("");
    const [artistImage, setArtistImage] = useState("")
    const [tracks, setTracks] = useState([])

    const [allItems, setAllItems] = useState([])

    var mergedArray = [];
    var popularityOrderedArray = [];
    var standardizedArray = [];


    const handleSearchResult = (data) => {         //   Callback function to update the data received from the SearchBar
        setSearchResult(data)
    }

    useEffect(() => {
        if (searchResult) {

            mergedArray = mergedArray.concat(searchResult.tracks.items, searchResult.artists.items)
            popularityOrderedArray = mergedArray.sort((a, b) => b.popularity - a.popularity);
            popularityOrderedArray.map((item) => {

                switch (item.type) {
                    case 'artist':
                        standardizedArray.push({
                            image: item.images[0]?.url,
                            name: item.name,
                            type: item.type,
                            id: item.id
                        })
                        break;

                    case 'track':
                        standardizedArray.push({
                            image: item.album.images[0]?.url,
                            name: item.name,
                            type: item.type,
                            id: item.id,
                            uri: item.uri
                        })
                        break;

                }

            })


            setAllItems(standardizedArray)



            setArtist(searchResult.artists.items[0].name)
            setType(searchResult.artists.items[0].type)
            setArtistImage(searchResult.artists.items[0].images[1].url)
            setTracks(searchResult.tracks.items)
            console.log(searchResult)
        }

    }, [searchResult])

    return (
        <div className='flex w-full h-screen overflow-auto font-gotham'>

            <div id="search-wrapper" className='flex flex-col gap-6 w-full h-full'>
                <div id="search-bar-wrapper">

                    <SearchBar handleSearchResult={handleSearchResult} />

                </div>

                <div id="search-body-wrapper" className='flex flex-col w-full h-full '>

                    <SearchBody artist={artist} artistImage={artistImage} type={type} tracks={tracks} standardizedArray={allItems} />

                </div>

            </div>

        </div>

    )
}

export default SearchPage