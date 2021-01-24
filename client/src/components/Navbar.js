import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { openModal } from '../actions/modalActions';

import { useDispatch, useSelector } from 'react-redux';
import avatar from '../assets/user.png';
import { logOutFirebase } from '../utils/firebaseService';
import {
  Menu,
  Container,
  MenuItem,
  Header,
  HeaderContent,
  ItemContent,
  Item,
  Button,
  Image,
} from 'semantic-ui-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const currentUser = useSelector((state) => state.auth);

  const handleLogOut = async () => {
    try {
      await logOutFirebase();
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Menu borderless inverted fixed="top">
        <Container>
          <Item>
            <ItemContent>
              <Header as={Link} to="/" inverted>
                <HeaderContent as="h1">WHITEBOARD</HeaderContent>
              </Header>
            </ItemContent>
          </Item>
          <MenuItem position="right">
            {isAuthenticated ? (
              <>
                <Button secondary onClick={handleLogOut}>
                  Log out
                </Button>
                <Image
                  avatar
                  spaced="right"
                  src={currentUser.photoURL || avatar}
                />
              </>
            ) : (
              <>
                <Button
                  secondary
                  onClick={() =>
                    dispatch(
                      openModal({
                        modalType: 'LoginModal',
                      })
                    )
                  }
                >
                  Log in
                </Button>
                <Button
                  inverted
                  color="green"
                  onClick={() => dispatch(openModal())}
                >
                  Sign up
                </Button>
              </>
            )}
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
