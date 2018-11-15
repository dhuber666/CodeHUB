import React from "react";
import { Menu } from "semantic-ui-react";

const Navbar = () => (
  <Menu color="teal" pointing secondary>
    <Menu.Item name="Home" active onClick={() => console.log("hi")}>
      CodeHUB
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item link>Logout</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
