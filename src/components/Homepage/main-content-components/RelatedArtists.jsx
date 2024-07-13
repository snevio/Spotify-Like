import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext'
import axios from 'axios'
import headers from '../../../Contexts/axiosHeader'
import { Link } from 'react-router-dom'
import ArtistCard from '../../CustomCards/ArtistCard'



export const RelatedArtists = () => {

    const { userTopArtists } = useContext(LoginContext)

    const [relatedArtists, setRelatedArtists] = useState('')
    const [firstResultArtist, setFirstResultArtist] = useState('')


    useEffect(() => {

        if (userTopArtists) {

            axios.get(`https://api.spotify.com/v1/artists/${userTopArtists.items[0]?.id}/related-artists`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {

                setRelatedArtists(res.data)
                setFirstResultArtist(userTopArtists.items[0])


            })

        }
    }, [userTopArtists])

    return (


        <div id="top_artists_section_wrapper" className='flex flex-col gap-3'>

            {firstResultArtist ?

                <div className='flex gap-3'>
                    <div className='w-14 h-14'>
                        <img src={firstResultArtist.images[2].url} className='rounded-full'></img>
                    </div>
                    <div>
                        <h2 className='text-gray-500 text-base'>Similar artists of</h2>
                        <h1 className='text-2xl font-semibold mb-3'>{firstResultArtist.name}</h1>
                    </div>
                </div>

                : <p>Loading</p>}



            <div id="artists_wrapper" className='flex gap-4 overflow-auto'>


                {relatedArtists ?

                    relatedArtists.artists.map((artist, index) => {
                        return (

                            <ArtistCard artistImage={artist.images[1].url} artistName={artist.name} artistId={artist?.id} key={artist.name} />
                        )

                    }) : <p>Loading</p>}





            </div>
        </div>
    )
}

export default RelatedArtists
