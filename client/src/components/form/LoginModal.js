import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicInput from './DynamicInput';
import { logInWithEmail } from '../../utils/firebaseService';
import ModalWrapper from '../modal/ModalWrapper';

const LoginModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ModalWrapper size="tiny" header="Log in">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await logInWithEmail(values);
              setSubmitting(false);
              dispatch({ type: 'CLOSE_MODAL' });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="ui form" autoComplete="off">
              <DynamicInput name="email" placeholder="Email address" />
              <DynamicInput
                name="password"
                placeholder="Password"
                type="password"
              />
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
      </ModalWrapper>
    </div>
  );
};

export default LoginModal;
