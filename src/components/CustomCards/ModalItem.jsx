import React, { useState } from 'react'
import { RxDotsVertical } from "react-icons/rx";
import Modal from './Modal';

const ModalItem = ({ itemImage, itemName, itemArtist, itemId }) => {

    const [switchModal, setSwitchModal] = useState(true)


    const updateModalStatus = (current) => {
        setSwitchModal((current) => !current)
    }

    return (
        <div className='flex items-center'>

            <RxDotsVertical size={19} onClick={() => {
                console.log("Onclick")
                setSwitchModal((current) => !current)
            }} />

            <Modal itemImage={itemImage} itemName={itemName} itemArtist={itemArtist} itemId={itemId} switchModal={switchModal} updateModalStatus={updateModalStatus} />


        </div>
    )
}

export default ModalItem