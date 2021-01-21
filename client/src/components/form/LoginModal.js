import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';

const LoginModal = () => {
  const open = useSelector((state) => state.loginModal.open);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal open={open} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <Modal.Header>
          <h2>Login modal</h2>
        </Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Close
          </Button>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Login
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default LoginModal;
