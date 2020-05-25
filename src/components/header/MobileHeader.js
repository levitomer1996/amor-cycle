import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeaderMediaCategory from "./HeaderMediaCategory";
import AdminButtonMenu from "./UserbuttonMenus/AdminButtonMenu";
import UserButtonMenu from "./UserbuttonMenus/UserButtonMenu";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "inline",
      backgroundColor: "#4a7ac3",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 0.8,
    color: "#ffffff",

    fontFamily: "Lucida Handwriting",
  },
}));

function MobileHeader(props) {
  const classes = useStyles();

  function renderButton() {
    if (!props.isLogged) {
      return (
        <Button color="inherit">
          <Link to="/signin" style={{ color: "white", textDecoration: "none" }}>
            Sign in
          </Link>
        </Button>
      );
    } else {
      if (!props.isAdmin) {
        return <UserButtonMenu name={props.fname} />;
      } else {
        return (
          //   <Button color="inherit">
          //     <Link to="/ap" style={{ color: "white", textDecoration: "none" }}>
          //       {props.f_name}
          //     </Link>
          //   </Button>
          <AdminButtonMenu name={props.f_name} />
        );
      }
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HeaderMediaCategory />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Amor-cycle
            </Link>
          </Typography>
          {renderButton()}
        </Toolbar>
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
  {}
)(MobileHeader);
