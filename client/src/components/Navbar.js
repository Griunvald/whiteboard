import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { openModal } from '../actions/modalActions';
import LoginModal from '../components/form/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../assets/user.png';
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
import { signOutUser } from '../actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const currentUser = useSelector((state) => state.auth);
  return (
    <div>
      <LoginModal />
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
                <Button
                  secondary
                  onClick={() => {
                    dispatch(signOutUser());
                    history.push('/');
                  }}
                >
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
                <Button secondary onClick={() => dispatch(openModal())}>
                  Log in
                </Button>
                <Button inverted color="green">
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
