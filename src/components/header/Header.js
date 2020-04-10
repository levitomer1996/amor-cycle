import React, { useState } from "react";
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
  renderUserPanel,
} from "./Header.module";

import { connect } from "react-redux";
import { setLogged } from "../../redux/actions/userActions";

function Header(props) {
  const classes = useStyles();
  const { title } = props;
  const [redirect, setRedirect] = useState({
    about: false,
    contact: false,
    register: false,
  });

  const signupButton = (
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
        {renderUserPanel(props.isLoggedIn, signupButton)}
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
    isLoggedIn: state.isLoggedIn,
    username: state.username,
    isAdmin: state.isAdmin,
  }),
  { setLogged }
)(Header);
