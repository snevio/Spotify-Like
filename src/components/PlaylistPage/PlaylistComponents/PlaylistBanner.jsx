import React, { useEffect, useState } from 'react'
import useGetColor from '../../../customHooks/useGetColor'


const PlaylistBanner = ({ image }) => {

    const colors = useGetColor(image)

    return (

        <div id="banner_wrapper" style={{ backgroundColor: `rgb(${colors[0]},${colors[1]},${colors[2]})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            < img src={image} className='w-64 h-64' ></img >
        </div >
    )
}

export default PlaylistBanner