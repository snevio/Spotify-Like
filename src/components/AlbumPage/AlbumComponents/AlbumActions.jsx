import React, { useState } from 'react'
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { useLikeAlbum } from '../../../customHooks/useLikeAlbum';
import { useDislikeAlbum } from '../../../customHooks/useDislikeAlbum';

const AlbumActions = ({ albumId, isLiked }) => {

    /* All of the down below is just placeholder code and needs to be change to put requests */



    function handleLike() {
        useLikeAlbum(albumId)
    }

    function handleDislike() {
        useDislikeAlbum(albumId)
    }


    return (
        <div className='flex items-center gap-8'>
            {isLiked ? <IoHeartSharp size={40} fill='red' onClick={handleDislike} /> : <IoHeartOutline size={40} onClick={handleLike} />}
            <CiShare2 size={30} />
        </div>
    )
}

export default AlbumActions