import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { baseUrl } from "../../serverURL";

//Header redirects

export const sections = [
  { title: "Nutrition,", url: "/article/nutrition" },
  {
    title: "Sustainability,",
    url: "/article/sustainability",
  },
  {
    title: "Health/Lifestyle",
    url: "/article/health/lifestyle",
  },
  {
    title: "Green landscape",
    url: "/article/greenlandscape",
  },
];

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 0.8,
    fontSize: "55px",
    color: "#14c31b",
    fontFamily: "Lucida Handwriting",
    lineHeight: 1.2,
    textAlign: "left",
    textShadow: "0px 3px 7px rgba(255, 0, 0, 0.44)",
    MozTransformStyle:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
    WebkitTransform:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
    msTransform:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
  },
  toolbarSecondary: {
    justifyContent: "space-evenly",
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  categoryMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "rgb(0, 9, 5)",
    fontStyle: "italic",
  },
  logo: {
    fontSize: "250px",
    fontFamily: "Lucida Handwriting",
    color: "rgb(0, 9, 5)",
    fontStyle: "italic",
    lineHeight: 1.2,
    textAlign: "left",
    textShadow: "0px 3px 7px rgba(0, 0, 0, 0.35)",
    MozTransformStyle:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
    WebkitTransform:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
    msTransform:
      "matrix( 0.75171352840501,-0.04769632083964,0,0.60045175861537,0,0)",
    position: "absolute",
    left: "603.146",
    top: "271.875px",
    zIndex: 3,
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

export function renderRedirect(redirect) {
  if (redirect.about) {
    return <Redirect to="/about" />;
  } else if (redirect.contact) {
    return <Redirect to="/contact" />;
  } else if (redirect.register) {
    return <Redirect to="/signup" />;
  } else if (redirect.adminpage) {
    return <Redirect to="/ap" />;
  } else if (redirect.userpage) {
    return <Redirect to="/userpage" />;
  } else {
    return;
  }
}

export function validateToken(token) {
  fetch(`${baseUrl}/auth/validatetoken/${token}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
