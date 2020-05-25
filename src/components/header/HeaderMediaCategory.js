import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const options = [
  { title: "Nutrition", url: "/article/nutrition" },
  { title: "Sustainability", url: "/article/sustainability" },
  { title: "Health/Lifestyle", url: "/article/health/lifestyle" },
  { title: "Greenlandscape", url: "/article/greenlandscape" },
];

const ITEM_HEIGHT = 48;

export default function HeaderMediaCategory() {
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
        <MenuIcon />
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
