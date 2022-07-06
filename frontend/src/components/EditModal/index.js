import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>✎ Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
