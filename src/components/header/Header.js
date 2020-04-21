import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Redirect } from "react-router-dom";
import {
  sections,
  useStyles,
  renderRedirect,
  validateToken,
} from "./Header.module";
//redux
import { connect } from "react-redux";
import { SET_LOGIN } from "../../redux/actions/userActions";

function renderUserPanel(registerButton, isLogged, username) {
  if (!isLogged) {
    return registerButton;
  } else {
    return <h1>{username}</h1>;
  }
}

async function fetchUser(token) {
  if (!token) {
    return;
  } else {
    try {
      let fetchedUser = await validateToken(token);
      console.log(fetchUser);
      return fetchedUser;
    } catch (error) {}
  }
}

function Header(props) {
  const classes = useStyles();
  //States
  const { title } = props;
  const [redirect, setRedirect] = useState({
    about: false,
    contact: false,
    register: false,
  });
  const [userState] = useState({
    isLoggedIn: props.isLoggedIn,
    isAdmin: props.isAdmin,
    username: props.username,
  });

  const [isFetched, setIsFetched] = useState(false);

  const signUpButton = (
    <Button
      variant="outlined"
      size="small"
      onClick={() =>
        setRedirect({ about: false, contact: false, register: true })
      }
    >
      Sign up
    </Button>
  );

  const userButton = (user) => (
    <Button variant="outlined" size="small">
      {user}
    </Button>
  );

  return (
    <React.Fragment>
      {renderRedirect(redirect)}

      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {renderUserPanel(
          signUpButton,

          props.isLogged,
          userButton(props.username)
        )}
      </Toolbar>
      <Button
        size="small"
        onClick={() =>
          setRedirect({ about: true, contact: false, register: false })
        }
      >
        About
      </Button>
      <Button
        size="small"
        onClick={() =>
          setRedirect({ about: false, contact: true, register: false })
        }
      >
        Contact
      </Button>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section) => (
          <Link to={section.url}>{section.title}</Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default connect(
  (state) => ({
    isLogged: state.isLogged,
    isAdmin: state.isAdmin,
    username: state.username,
  }),
  { SET_LOGIN }
)(Header);
