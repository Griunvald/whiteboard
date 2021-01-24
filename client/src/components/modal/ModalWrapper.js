import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../actions/modalActions';

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  return (
    <Modal open={open} onClose={() => dispatch(closeModal())} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
export default ModalWrapper;
