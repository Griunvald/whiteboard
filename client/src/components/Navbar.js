import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../actions/modalActions';
import LoginModal from '../components/form/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import {
  Menu,
  Container,
  MenuItem,
  Header,
  HeaderContent,
  ItemContent,
  Item,
  Button,
} from 'semantic-ui-react';

const Navbar = () => {
  const dispatch = useDispatch();
  const modalToggle = useSelector((state) => state.loginModal.open);
  return (
    <div>
      {modalToggle ? <LoginModal /> : null}
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
            <Button secondary onClick={() => dispatch(openModal())}>
              Log in
            </Button>
            <Button inverted color="green">
              Sign up
            </Button>
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
