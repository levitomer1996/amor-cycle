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
import HeaderMediaCategory from "./HeaderMediaCategory";
import { Redirect } from "react-router-dom";
import {
  sections,
  useStyles,
  renderRedirect,
  validateToken,
} from "./Header.module";
import "./Header.style.css";

import { token } from "../../token";

//redux
import { connect } from "react-redux";
import { SET_LOGIN } from "../../redux/actions/userActions";
import { baseUrl } from "../../serverURL";

function Header(props) {
  const classes = useStyles();
  //States
  const { title } = props;
  const [redirect, setRedirect] = useState({
    about: false,
    contact: false,
    register: false,
    adminpage: false,
    userPage: false,
  });

  //Checks if users is logged or not.
  function renderUserPanel(signupButton) {
    const { SET_LOGIN } = props;
    if (!sessionStorage.getItem("at")) {
      return signupButton;
    } else {
      if (!isFetched) {
        fetch(`${baseUrl}/auth/validatetoken/${sessionStorage.getItem("at")}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            SET_LOGIN(data.email, data.isAdmin, true, data.f_name, data.l_name);

            setIsFetched(true);
            return signupButton;
          });
      } else {
        if (!props.isAdmin) {
          return userButton(props.f_name);
        } else {
          return adminButton(props.f_name);
        }
      }
    }
  }

  const [isFetched, setIsFetched] = useState(false);
  const [adminRedirect, setAdminRedirect] = useState(false);

  const signUpButton = (
    <Button
      variant="outlined"
      size="small"
      onClick={() =>
        setRedirect({
          about: false,
          contact: false,
          register: true,
          adminpage: false,
          userPage: false,
        })
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

  const adminButton = (user) => (
    <Button
      variant="outlined"
      size="small"
      onClick={() => {
        setRedirect({
          about: false,
          contact: false,
          register: false,
          adminpage: true,
          userpage: false,
        });
      }}
    >
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
          // noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <div>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        {renderUserPanel(
          signUpButton,

          props.isLogged,
          userButton(props.username, props.isAdmin)
        )}
      </Toolbar>

      <Button
        size="small"
        onClick={() =>
          setRedirect({
            about: true,
            contact: false,
            register: false,
            adminpage: false,
            userpage: false,
          })
        }
      >
        About
      </Button>
      <Button
        size="small"
        onClick={() =>
          setRedirect({
            about: false,
            contact: true,
            register: false,
            adminpage: false,
            userpage: false,
          })
        }
      >
        Contact
      </Button>
      <Button className={classes.categoryMenu}>
        <HeaderMediaCategory sections={sections} />
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
    f_name: state.f_name,
    l_name: state.l_name,
  }),
  { SET_LOGIN }
)(Header);
