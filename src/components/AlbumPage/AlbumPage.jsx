import React from 'react'
import { useParams } from 'react-router-dom'
import AlbumBanner from './AlbumComponents/AlbumBanner';
import AlbumInfo from './AlbumComponents/AlbumInfo';
import AlbumSongs from './AlbumComponents/AlbumSongs';
import AlbumFooter from './AlbumComponents/AlbumFooter';
import AlbumActions from './AlbumComponents/AlbumActions';
import { motion } from "framer-motion"
import { useFetchAlbumData } from '../../customHooks/useFetchAlbumData';
import { useUserLikedAlbum } from '../../customHooks/useUserLikedAlbum';
import { checkToken } from '../../customHooks/checkToken';




const AlbumPage = () => {

    checkToken();

    const params = useParams();
    const albumId = params.id;

    const albumData = useFetchAlbumData(albumId)
    const isLiked = useUserLikedAlbum(albumId)



    return (
        <div className='flex'>

            {albumData ?

                <div className='overflow-auto w-full'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, stiffness: 100 }} className='flex flex-col min-w-full gap-8 '>

                        <AlbumBanner bannerImage={albumData.images[1].url} albumName={albumData.name} albumArtist={albumData.artists[0].name} albumType={albumData.album_type} albumRelease={albumData.release_date.slice(0, 4)} />
                        <div className='p-4 flex flex-col gap-9'>
                            <AlbumInfo albumName={albumData.name} albumArtist={albumData.artists[0].name} albumType={albumData.album_type} albumRelease={albumData.release_date.slice(0, 4)} />
                            <AlbumActions albumId={albumId} isLiked={isLiked} />
                            <AlbumSongs albumTracks={albumData.tracks.items} albumImage={albumData.images[1].url} />
                            <AlbumFooter albumRelease={albumData.release_date} albumArtist={albumData.artists[0].name} albumCopyright={albumData.copyrights[0].text} />
                        </div>
                    </motion.div>
                </div>

                :

                null
            }
        </div >
    )
}

export default AlbumPage