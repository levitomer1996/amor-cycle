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
import AdminButtonMenu from "./UserbuttonMenus/AdminButtonMenu";
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
import { SET_LOGIN, SET_LOGOUT } from "../../redux/actions/userActions";
import { baseUrl } from "../../serverURL";

function Header(props) {
  const classes = useStyles();
  //States
  const { title } = props;

  //Checks if users is logged or not.
  function renderUserPanel() {
    const { SET_LOGIN, SET_LOGOUT } = props;

    if (!sessionStorage.getItem("at")) {
      SET_LOGOUT();
      return (
        <Button variant="outlined" size="small">
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            Sign-up
          </Link>
        </Button>
      );
    } else {
      if (!isFetched.isFetched) {
        fetch(`${baseUrl}/auth/validatetoken/${sessionStorage.getItem("at")}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.error === "TokenExpiredError") {
              console.log("error");
              SET_LOGIN("", "", false, "", "");
              setIsFetched({ isFetched: true, isError: true });
              return (
                <Button variant="outlined" size="small">
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Sign-up
                  </Link>
                </Button>
              );
            } else {
              console.log("not Error");
              SET_LOGIN(
                data.email,
                data.isAdmin,
                true,
                data.f_name,
                data.l_name
              );
              setIsFetched({ isFetched: true, isError: false });
              return userButton(data.f_name);
            }
          });
      } else {
        if (!isFetched.isError) {
          if (!props.isAdmin) {
            return userButton(props.f_name);
          } else {
            return adminButton(props.f_name);
          }
        } else {
          return (
            <Button variant="outlined" size="small">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign-up
              </Link>
            </Button>
          );
        }
      }
    }
  }

  const [isFetched, setIsFetched] = useState({
    isFetched: false,
    isError: false,
  });
  const [adminRedirect, setAdminRedirect] = useState(false);

  const userButton = (user) => (
    <Button variant="outlined" size="small">
      {user.f_name}
    </Button>
  );

  const adminButton = (user) => (
    // <Button variant="outlined" size="small">
    //   <Link to="/ap" style={{ textDecoration: "none", color: "black" }}>
    //     {" "}
    //     {user}
    //   </Link>
    // </Button>
    <AdminButtonMenu name={user} />
  );

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          // noWrap
          className={classes.toolbarTitle}
        >
          <Link to="/" className={classes.toolbarTitle}>
            {title}
          </Link>
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

        {renderUserPanel()}
      </Toolbar>

      <Button size="small">
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          About
        </Link>
      </Button>

      <Button size="small">
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          {" "}
          Contact
        </Link>
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
  { SET_LOGIN, SET_LOGOUT }
)(Header);
