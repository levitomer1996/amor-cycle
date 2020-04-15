import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import React, { useState } from "react";

//Header redirects
export const sections = [
  { title: "Nutrition,", url: "/ariticlespage?articlespage=nutrition" },
  {
    title: "Sustainability,",
    url: "/ariticlespage?articlespage=sustainability",
  },
  {
    title: "Health/Lifestyle",
    url: "/ariticlespage?articlespage=health/lifestyle",
  },
  {
    title: "Green landscape",
    url: "/ariticlespage?articlespage=greenlandscape",
  },
];

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-evenly",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export function renderRedirect(redirect) {
  if (redirect.about) {
    return <Redirect to="/about" />;
  } else if (redirect.contact) {
    return <Redirect to="/contact" />;
  } else if (redirect.register) {
    return <Redirect to="/signup" />;
  } else {
    return;
  }
}
