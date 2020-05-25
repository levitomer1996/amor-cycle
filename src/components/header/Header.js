import React, { useState } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
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
import UserButtonMenu from "./UserbuttonMenus/UserButtonMenu";
import MobileHeader from "./MobileHeader";
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
//Server url
import { baseUrl } from "../../serverURL";
import { Container } from "@material-ui/core";

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
          <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
            Sign-in
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
              SET_LOGOUT();
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
              SET_LOGIN(
                data.email,
                data.isAdmin,
                true,
                data.f_name,
                data.l_name,
                data.id
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
    // <Button variant="outlined" size="small">
    //   {user.f_name}
    // </Button>
    <UserButtonMenu name={user.f_name} />
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
      <Navbar className={classes.toolbar}>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Navbar.Brand>
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
              </Navbar.Brand>
            </Col>

            <Col xs={12} md={8}>
              <div style={{ float: "right" }}>
                <div>
                  <Button>
                    <Link to="/about" style={{ color: "black" }}>
                      <strong>About</strong>
                    </Link>
                  </Button>
                  <Button>
                    <Link to="/contact" style={{ color: "black" }}>
                      <strong>Contact</strong>
                    </Link>
                  </Button>
                </div>
                <Button className={classes.categoryMenu}>
                  <HeaderMediaCategory sections={sections} />
                </Button>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>

                {renderUserPanel()}
              </div>
            </Col>
          </Row>
          <Row>
            <Toolbar
              component="nav"
              variant="dense"
              className={classes.toolbarSecondary}
            >
              <Row>
                {sections.map((section) => (
                  <Col>
                    <Button>
                      <Link to={section.url} style={{ color: "black" }}>
                        {section.title}
                      </Link>
                    </Button>
                  </Col>
                ))}
              </Row>
            </Toolbar>
          </Row>
        </Container>
      </Navbar>
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
    userId: state.userId,
  }),
  { SET_LOGIN, SET_LOGOUT }
)(Header);
