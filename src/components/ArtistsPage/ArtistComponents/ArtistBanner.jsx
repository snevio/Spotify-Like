
import React from 'react'
import useGetColor from '../../../customHooks/useGetColor'

const ArtistBanner = ({ banner, name, followers }) => {

    const colors = useGetColor(banner)



    return (
        <div id="banner-wrapper" style={{ position: 'relative', width: '100%', height: '100%', filter: `drop-shadow(rgb(${colors[0]},${colors[1]},${colors[2]}, 1) 1rem 1rem 6rem )` }} className={'md:bg-gradient-to-l from-[rgb(0,0,0)]'} >
            <div className='relative h-72 overflow-hidden pointer-events-none'>

                <div className='absolute bottom-0 z-10 p-4 text-white'>
                    <p className='text-4xl font-bold'>{name}</p>
                    <p>Followers: {followers.toLocaleString()}</p>               {/*   toLocaleString only formats the raw number to a string adding the commas after the decimals 1739768 => 1,739,768 */}
                </div>
                <div id="banner-image-container" className='md:flex md:justify-center md:items-center'>
                    <img src={banner} className='opacity-65 object-cover md:mt-[-10rem]'></img>
                </div>

            </div>

        </div>
    )
}

export default ArtistBanner