import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const options = [
  { title: "Sign-in", url: "/signin" },
  { title: "Sign-up", url: "/signup" },
];

const ITEM_HEIGHT = 48;

export default function HeaderUnregisteredUser() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: "white" }}
      >
        <PersonIcon fontSize="large" />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.title}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            <Link
              to={option.url}
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              {option.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
