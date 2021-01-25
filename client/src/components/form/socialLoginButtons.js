import React from 'react';
import { Button } from 'semantic-ui-react';

export const SocialLogin = () => {
  return (
    <>
      <Button
        icon="facebook"
        fluid
        color="facebook"
        content="Login with Facebook"
        style={{
          marginBottom: '10px',
        }}
      />
      <Button
        icon="google"
        fluid
        color="google plus"
        content="Login with Google"
        style={{
          marginBottom: '10px',
        }}
      />
    </>
  );
};

export default SocialLogin;
