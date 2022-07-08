import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadSongForm from './UploadSongForm';
import './UploadSongForm.css'

function UploadSongModal({album}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className='add-song-button' onClick={() => setShowModal(true)}>Add Song to Album</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadSongForm closeModal={closeModal} album={album}/>
        </Modal>
      )}
    </>
  );
}

export default UploadSongModal;
