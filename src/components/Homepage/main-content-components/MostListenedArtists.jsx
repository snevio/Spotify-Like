import React, { useContext } from 'react'
import { LoginContext } from '../../../Contexts/LoginContext'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ArtistCard from '../../CustomCards/ArtistCard'

export const MostListenedArtists = () => {

    const { userTopArtists } = useContext(LoginContext)


    return (
        <div id="top_artists_section_wrapper">

            <h1 className='text-3xl font-semibold mb-3'>YOUR TOP ARTISTS</h1>

            <div id="artists_wrapper" className='flex gap-3 overflow-auto '>

                {userTopArtists ?
                    userTopArtists.items.map((artist, index) => {
                        return (

                            <ArtistCard artistImage={artist.images[1].url} artistName={artist.name} artistId={artist.id} key={artist.name} />

                        )
                    })

                    : <p>Loading</p>}
            </div>
        </div>
    )
}

export default MostListenedArtists