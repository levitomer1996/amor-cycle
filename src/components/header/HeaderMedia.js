import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    flex: 0.8,
    fontSize: "55px",
    color: "#ffffff",
    fontFamily: "Lucida Handwriting",
    lineHeight: 1.2,
    textAlign: "left",
    textShadow: "0px 3px 7px rgba(255, 0, 0, 0.44)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "45px",
    },
  },
  header: { position: "relative" },
  link: {
    color: "#8397a0",
    fontSize: "30px",
    "&:hover": {
      color: "white",
      textDecoration: "none",
      borderBottom: "5px solid #ffc107",
    },
  },
}));

const options = [
  { title: "Nutrition", url: "/article/nutrition" },
  { title: "Sustainability", url: "/article/sustainability" },
  { title: "Health/Lifestyle", url: "/article/health/lifestyle" },
  { title: "Greenlandscape", url: "/article/greenlandscape" },
];

const ITEM_HEIGHT = 48;

export default function HeaderMediaCategory(props) {
  const classes = useStyles();
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
      <a onClick={handleClick} className={classes.link}>
        Articles
      </a>
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
