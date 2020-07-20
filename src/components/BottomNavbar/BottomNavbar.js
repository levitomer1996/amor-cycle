import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Copyright } from "../Main/Sign_in/signin.style";

function BottomNavbar(props) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{
        color: "white",
        position: "fixed",
        width: "100%",
        bottom: "0%",
        zIndex: "1",
      }}
    >
      <Navbar.Brand href="#home">
        <Copyright />
      </Navbar.Brand>
    </Navbar>
  );
}

export default BottomNavbar;
