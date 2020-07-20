import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import HeaderMediaCategory from "./HeaderMedia";
import HeaderUnregisteredUser from "./HeaderUnregisteredUser";
import UserButtonMenu from "./UserbuttonMenus/UserButtonMenu";
import AdminButtonMenu from "./UserbuttonMenus/AdminButtonMenu";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";

import { connect } from "react-redux";
import { SET_LOGIN, SET_LOGOUT } from "./../../redux/actions/userActions";
import { baseUrl } from "../../serverURL";

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
    borderBottom: "0px solid #ffc107",
    transition: "border-bottom 0.2s",
    "&:hover": {
      color: "white",
      textDecoration: "none",
      backgroundColor: "#ffffff42",
      borderBottom: "5px solid #ffc107",
      borderRadius: "9%",
    },
  },
}));

function Header(props) {
  //Styles
  const classes = useStyles();

  //states
  const [isFetched, setIsFetched] = useState({
    isFetched: false,
    isError: false,
  });

  const {
    SET_LOGIN,
    SET_LOGOUT,
    isAdmin,
    isLogged,
    f_name,
    l_name,
    username,
  } = props;
  //Checks if user is logged or not.
  function renderUserPanel() {
    const { SET_LOGIN, SET_LOGOUT } = props;

    if (!sessionStorage.getItem("at")) {
      SET_LOGOUT();
      return <HeaderUnregisteredUser />;
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
                <IconButton>
                  <PersonIcon fontSize={"large"}></PersonIcon>
                </IconButton>
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
              return <UserButtonMenu name={f_name} />;
            }
          });
      } else {
        if (!isFetched.isError) {
          if (!props.isAdmin) {
            return <UserButtonMenu name={f_name} />;
          } else {
            return <AdminButtonMenu name={f_name} />;
          }
        } else {
          return (
            <IconButton>
              <PersonIcon fontSize={"large"}></PersonIcon>
            </IconButton>
          );
        }
      }
    }
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <Row>
          <Col xs={4}>
            <Link to="/" className={classes.title}>
              {"Amor-Cycle"}
            </Link>
          </Col>
          <Col>
            <Row>
              <Col xs={2}>
                <Link to="/about" className={classes.link}>
                  About
                </Link>
              </Col>
              <Col xs={2}>
                <Link to="/contact" className={classes.link}>
                  Contact
                </Link>
              </Col>
              <Col xs={4}>
                {" "}
                <HeaderMediaCategory styless={classes.link} />
              </Col>
              {renderUserPanel()}
            </Row>
          </Col>
        </Row>
      </AppBar>
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
    userId: state.userId,
  }),
  { SET_LOGOUT, SET_LOGIN }
)(Header);
