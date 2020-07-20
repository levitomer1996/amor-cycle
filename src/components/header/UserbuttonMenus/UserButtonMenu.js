import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PersonIcon from "@material-ui/icons/Person";

//Styles
import { useStyles } from "../Header.module";

//Router
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { SET_LOGOUT } from "../../../redux/actions/userActions";

function UserButtonMenu(props) {
  const { SET_LOGOUT, f_name } = props;

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
      <PersonIcon fontSize={"large"} />
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        style={{ color: "white" }}
        onClick={handleClick}
        className={classes.userPanelTextColor}
      >
        {f_name}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose(false)}>
          <Link to="/userpanel" className={classes.link}>
            User panel
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
)(UserButtonMenu);
