import { average } from 'color.js'
import React, { useEffect, useState } from 'react'
import useGetColor from '../../../customHooks/useGetColor'

const AlbumBanner = ({ bannerImage, albumName, albumArtist, albumType, albumRelease }) => {

    const colors = useGetColor(bannerImage)

    return (

        <div style={{ display: 'flex', padding: '2rem', background: `rgb(${colors[0]},${colors[1]},${colors[2]})`, background: `linear-gradient(180deg, rgba(${colors[0]},${colors[1]},${colors[2]}, 1) 50%, rgba(3,7,18,1) 96%)` }} className='justify-center md:justify-start md:gap-5'>

            <img src={bannerImage}></img>
            <div id="banner_info_desktop" className='hidden md:flex md:flex-col md:justify-between'>
                <p className='text-base font-bold'>{albumType}</p>
                <p className='text-8xl font-bold'>{albumName}</p>
                <div className='flex text-sm font-bold'>
                    <p className=''>{albumArtist}</p>
                    <p>, {albumRelease}</p>
                </div>

            </div>

        </div>

    )
}

export default AlbumBanner