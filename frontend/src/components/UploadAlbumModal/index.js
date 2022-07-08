import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadAlbumForm from './UploadAlbumForm';

function UploadAlbumModal({album}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button className='upload-own-button' onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadAlbumForm closeModal={closeModal} album={album}/>
        </Modal>
      )}
    </>
  );
}

export default UploadAlbumModal;
