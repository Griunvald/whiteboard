import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <div>
      <Menu borderless fixed="top" inverted>
        <Container>
          <Item>
            <ItemContent>
              <Header as={Link} to="/" inverted>
                <HeaderContent as="h1">WHITEBOARD</HeaderContent>
              </Header>
            </ItemContent>
          </Item>
          <MenuItem position="right">
            <Button secondary>Log in</Button>
            <Button primary>Sign up</Button>
          </MenuItem>
        </Container>
      </Menu>
    </div>
  );
};

export default Navbar;
