import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ArtistAlbums = ({ artistAlbums }) => {


    const [discOpen, setDiscOpen] = useState(true)

    function handleDiscography() {

        setDiscOpen(!discOpen)
        console.log(discOpen)
    }

    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Discography</h1>


            {discOpen ?

                // Show only the first 5 results

                artistAlbums.items.slice(0, 4).map((album, index) => {
                    return (
                        <Link to={"/album/" + album.id} key={album.id}>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex gap-3 items-center p-2 rounded-lg hover:bg-white hover:bg-opacity-10' key={album.id}>

                                <div className='flex gap-3 items-center'>
                                    <img src={album.images[2].url}></img>
                                    <div>
                                        <p >{album.name}</p>

                                        <div className='flex gap-2 text-gray-500'>

                                            <p>{album.album_group}</p>
                                            <p>{album.release_date.slice(0, 4)}</p>

                                        </div>
                                    </div>

                                </div>

                            </motion.div>
                        </Link>
                    )

                })


                :

                // Show all the albums to the user


                artistAlbums.items.map((album, index) => {
                    return (
                        <Link to={"/album/" + album.id} key={album.id}>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex gap-3 items-center' key={album.id}>

                                <div className='flex gap-3 items-center'>
                                    <img src={album.images[2].url}></img>
                                    <div>
                                        <p>{album.name}</p>

                                        <div className='flex text-gray-500'>

                                            <p>{album.album_group}</p>
                                            <p>{album.release_date.slice(0, 4)}</p>

                                        </div>
                                    </div>

                                </div>

                            </motion.div>
                        </Link>
                    )

                })}


            {discOpen ?
                <button onClick={handleDiscography}>Display all the discography</button>

                :

                <button onClick={handleDiscography}>Restrict Discography</button>}


        </div>
    )
}

export default ArtistAlbums