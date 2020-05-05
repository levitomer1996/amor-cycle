import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//Styles
import { useStyles } from "../Header.module";

//Router
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { SET_LOGOUT } from "../../../redux/actions/userActions";

function AdminButtonMenu(props) {
  const { SET_LOGOUT } = props;
  console.log(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (isLogout) => {
    if (isLogout) {
      SET_LOGOUT();
      sessionStorage.removeItem("at");
    }
    console.log(props);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(false)}>
          <Link to="/ap" className={classes.link}>
            Admin panel
          </Link>
        </MenuItem>

        <MenuItem onClick={() => handleClose(true)}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default connect(
  (state) => ({
    isLogged: state.isLogged,
    isAdmin: state.isAdmin,
    username: state.username,
    f_name: state.f_name,
    l_name: state.l_name,
  }),
  { SET_LOGOUT }
)(AdminButtonMenu);
