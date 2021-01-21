import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../common/form/CustomInput';
import { signInUser } from '../../actions/authActions';

const LoginModal = () => {
  const open = useSelector((state) => state.loginModal.open);
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        size="mini"
      >
        <Modal.Header>
          <h2>Login modal</h2>
        </Modal.Header>
        <Modal.Content>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().required().email(),
              password: Yup.string().required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(signInUser(values));
              setSubmitting(false);
              dispatch({ type: 'CLOSE_MODAL' });
            }}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="ui form">
                <CustomInput
                  name="email"
                  placeholder="Email address"
                ></CustomInput>
                <CustomInput
                  name="password"
                  placeholder="Password"
                  type="password"
                ></CustomInput>
                <Button
                  loading={isSubmitting}
                  disabled={!isValid || !dirty || isSubmitting}
                  type="submit"
                  fluid
                  size="large"
                  color="green"
                  content="Login"
                />
              </Form>
            )}
          </Formik>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default LoginModal;
