import React, { useState } from 'react'
import Modal from '../../CustomCards/Modal'
import { RxDotsVertical } from "react-icons/rx";
import FilteredSongs from './FilteredSongs';
import UnfilteredSongs from './UnfilteredSongs';

const PlaylistSongs = ({ tracks, filteredSongs, search }) => {


    const [switchModal, setSwitchModal] = useState(true)
    const [modalImg, setModalImg] = useState("")
    const [modalName, setModalName] = useState("")
    const [modalArtist, setModalArtist] = useState("")
    const [modalTrackId, setModalTrackId] = useState("")


    const updateModalStatus = (current) => {
        setSwitchModal((current) => !current)
    }

    function getTrackOpt(img, title, artist, id) {
        setModalImg(img)
        setModalName(title)
        setModalArtist(artist)
        setModalTrackId(id)

    }

    return (
        <div>

            {search ?


                <FilteredSongs filteredSongs={filteredSongs} updateModalStatus={updateModalStatus} switchModal={switchModal} getTrackOpt={getTrackOpt} />
                :

                <UnfilteredSongs tracks={tracks} updateModalStatus={updateModalStatus} switchModal={switchModal} getTrackOpt={getTrackOpt} />
            }

            <Modal image={modalImg} songName={modalName} songArtist={modalArtist} songId={modalTrackId} switchModal={switchModal} updateModalStatus={updateModalStatus} />

        </div>
    )
}

export default PlaylistSongs