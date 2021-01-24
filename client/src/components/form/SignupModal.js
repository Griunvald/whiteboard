import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import DynamicInput from './DynamicInput';
import { logInWithEmail } from '../../utils/firebaseService';
import ModalWrapper from '../modal/ModalWrapper';

const SignupModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ModalWrapper size="tiny" header="Sign up">
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={Yup.object({
            username: Yup.string().required(),
            email: Yup.string().required().email(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            try {
              await logInWithEmail(values);
              setSubmitting(false);
              dispatch({ type: 'CLOSE_MODAL' });
            } catch (error) {
              setErrors({ auth: error.message });
            }
          }}
        >
          {({ isSubmitting, isValid, dirty, errors }) => (
            <Form className="ui form" autoComplete="off">
              <DynamicInput name="username" placeholder="Username" />
              <DynamicInput name="email" placeholder="Email address" />
              <DynamicInput
                name="password"
                placeholder="Password"
                type="password"
              />
              {errors.auth && (
                <Label
                  basic
                  color="red"
                  style={{ marginBottom: '10px' }}
                  content={errors.auth}
                />
              )}
              <Button
                loading={isSubmitting}
                disabled={!isValid || !dirty || isSubmitting}
                type="submit"
                fluid
                size="large"
                color="green"
                content="Sign up"
              />
            </Form>
          )}
        </Formik>
      </ModalWrapper>
    </div>
  );
};

export default SignupModal;
