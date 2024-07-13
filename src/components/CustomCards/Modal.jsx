import React, { useContext, useRef, useState } from 'react'
import { useLikeTrack } from '../../customHooks/useLikeTrack'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaItunesNote } from "react-icons/fa";





const Modal = ({ itemImage, itemName, itemArtist, itemId, switchModal, updateModalStatus }) => {



    const [modalPlaylistOpen, setModalPlaylistOpen] = useState(true)



    return (
        <div className={switchModal ? 'hidden' : 'visible' + ' fixed flex flex-col gap-4 justify-center items-center top-0 left-0 z-30 w-full h-full bg-black'} >

            <IoIosArrowRoundBack size={50} className="absolute top-3 left-3" onClick={() => {
                updateModalStatus(switchModal)
            }} />

            <div id="image_wrapper" className='w-32 h-32 bg-black'>
                <img src={itemImage} className='w-full h.full' />
            </div>

            <div id="modal__wrapper" className='flex flex-col justify-center items-center gap-2 '>
                <p className='w-56 text-sm text-center line-clamp-2 text-ellipsis overflow-hidden '>{itemName}</p>
                <p>{itemArtist}</p>
            </div>

            <div className='flex flex-col gap-3 text-2xl'>
                <div className='flex justify-center items-center gap-5 cursor-pointer' id="like">
                    <FaHeart />
                    <p onClick={() => {

                        useLikeTrack(itemId)



                    }}>
                        Like</p>
                </div>

            </div>

        </div >

    )
}

export default Modal