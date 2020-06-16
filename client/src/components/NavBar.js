import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar () {
  return (
    <Menu>
      <Link to='/'>
        <Menu.Item> Home </Menu.Item>
      </Link>
      <Link to="/products">
        <Menu.Item>Products</Menu.Item>
      </Link>
    </Menu>
  )
}