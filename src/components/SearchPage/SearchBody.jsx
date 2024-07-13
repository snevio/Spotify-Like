import React, { useState } from 'react'
import { RxDotsVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Modal from '../CustomCards/Modal';


export const SearchBody = ({ artist, artistImage, type, tracks, standardizedArray }) => {

    const [switchModal, setSwitchModal] = useState(true)

    const updateModalStatus = (current) => {
        setSwitchModal((current) => !current)
    }


    return (
        <div id="body-wrapper" className='w-full h-full p-3'>

            <div id="songs-wrapper" className='flex flex-col gap-3'>
                <h1>Other results </h1>

                {/**Later to be removed together with the other h1's */}
                {/**The below tracks state needs to be normalized (as of right now is only used as a placeholder) */}


                {standardizedArray.map((item) => {
                    return (


                        <div id="item_wrapper" className='flex gap-3 w-full'>

                            {item.type == 'track' ?

                                <div className='w-full flex justify-between'>
                                    <div className='flex gap-2 items-center'>

                                        <div id="image_wrapper" className='flex items-center w-12 h-16 '>
                                            <img src={item.image} id="track"></img>
                                        </div>

                                        <div className='flex flex-col gap-1 overflow-hidden rounded'>
                                            <section id='name' className='whitespace-nowrap text-ellipsis'>{item.name}</section>
                                            <section id="type" className='text-gray-500 text-sm font-semibold'>{item.name} ● {item.type}</section>
                                        </div>


                                    </div>
                                    <div className='flex items-center'>
                                        <RxDotsVertical size={19} onClick={() => setSwitchModal((currentState) => !currentState)} />
                                    </div>
                                    <Modal image={item.image} songName={item.name} songArtist={artist} songId={item.id} switchModal={switchModal} updateModalStatus={updateModalStatus} />
                                </div>



                                :

                                <Link to={"/artist/" + item.id} className='flex justify-between items-center gap-3'>

                                    <div id="image_wrapper" className='flex items-center w-12 h-16'>
                                        <img src={item.image} className='rounded-full'></img>
                                    </div>

                                    <div className='flex flex-col gap-1 overflow-hidden rounded'>
                                        <section id='name' className='whitespace-nowrap text-ellipsis'>{item.name}</section>
                                        <section id="type" className='text-gray-500 text-sm font-semibold'>{item.name} ● {item.type}</section>
                                    </div>

                                </Link>

                            }


                        </div>
                    )
                })}
            </div >

        </div >


    )
}
