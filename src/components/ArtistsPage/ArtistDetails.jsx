
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ArtistBanner from './ArtistComponents/ArtistBanner';
import ArtistTracks from './ArtistComponents/ArtistTracks';
import ArtistAlbums from './ArtistComponents/ArtistAlbums';
import ArtistRelated from './ArtistComponents/ArtistRelated';
import ArtistPlaylist from './ArtistComponents/ArtistPlaylist';
import FollowButton from './ArtistComponents/FollowButton';
import { motion } from "framer-motion"
import { useGetArtistDetails } from '../../customHooks/useGetArtistDetails';
import { checkToken } from '../../customHooks/checkToken';



const ArtistDetails = ({ key }) => {



    checkToken();

    const params = useParams();
    const artistId = params.id;

    const { artist, isFollowing, artistTracks, artistAlbums, relatedArtists, artistPlaylist } = useGetArtistDetails(artistId)


    return (

        <div className='font-gotham flex'>

            {artist ?

                <div className='overflow-auto'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, stiffness: 100 }}>
                        <ArtistBanner banner={artist.images[0].url} name={artist.name} followers={artist.followers.total} />
                        <div className='p-4 flex flex-col gap-10'>

                            <FollowButton isFollowing={isFollowing} artistId={artistId} />
                            <ArtistTracks artistTracks={artistTracks} artistName={artist.name} />
                            <ArtistAlbums artistAlbums={artistAlbums} />
                            <ArtistRelated relatedArtists={relatedArtists} />
                            <ArtistPlaylist artistPlaylist={artistPlaylist} artistName={artist.name} />
                        </div>

                    </motion.div>
                </div>

                :


                <div className='w-full h-screen sticky'></div>

            }


        </div >
    )
}

export default ArtistDetails