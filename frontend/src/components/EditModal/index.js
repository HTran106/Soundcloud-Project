import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal({song}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>✎ Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm song={song}/>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
