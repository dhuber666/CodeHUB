import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu color="teal" pointing secondary>
    <Menu.Item name="Home" active as={Link} to="/">
      CodeHUB
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item as={Link} to="/admin">
        Admin
      </Menu.Item>
      <Menu.Item link>Logout</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
