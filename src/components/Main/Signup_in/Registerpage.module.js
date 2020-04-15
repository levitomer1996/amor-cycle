import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { baseUrl } from "../../../serverURL";

//Styling the page
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#1bcd0f",
    "&:hover": {
      background: "rgba(66, 247, 20, 0.48)",
    },
  },
}));
//Copy right component
export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Amor-Cycle
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export async function handleSubmit(e, state) {
  e.preventDefault();

  fetch(`${baseUrl}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(state),
  })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const jsonedData = JSON.parse(data);
      if (jsonedData.statusCode == 400) {
        throw new Error(jsonedData.error);
      } else {
        return JSON.parse(data);
      }
    })
    .catch((error) => {
      return error;
    });
}
