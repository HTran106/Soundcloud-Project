import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSongForm from './EditSongForm.js';

function EditSongModal({song}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>✎ Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSongForm closeModal={closeModal} song={song}/>
        </Modal>
      )}
    </>
  );
}

export default EditSongModal;
