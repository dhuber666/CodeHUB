import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu color="teal" pointing secondary>
    <Menu.Item name="Home" active onClick={() => console.log("hi")}>
      <Link to="/">CodeHUB</Link>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item link>
        <Link to="/admin">Admin</Link>
      </Menu.Item>
      <Menu.Item link>Logout</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
