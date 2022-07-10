import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadAlbumForm from './UploadAlbumForm';
import './UploadAlbumForm.css'

function UploadAlbumModal({album}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className='add-album-button' onClick={() => setShowModal(true)}>Add Album</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadAlbumForm closeModal={closeModal} album={album}/>
        </Modal>
      )}
    </>
  );
}

export default UploadAlbumModal;
