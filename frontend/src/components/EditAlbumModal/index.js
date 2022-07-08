import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAlbumForm from './EditAlbumForm.js';

function EditAlbumModal({album}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>✎ Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAlbumForm closeModal={closeModal} album={album}/>
        </Modal>
      )}
    </>
  );
}

export default EditAlbumModal;
