import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { baseUrl } from "../../../serverURL";

//Article page styling.
export const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Comic Sans MS",
  },
  topContainer: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    gridTemplateRows: "30% 70%",
    height: "100%",
  },
  topIMG: {
    maxWidth: "223px",
  },
  commentContainer: {
    width: "70%",
    borderRadius: "7px",
    backgroundColor: "80808012",
  },
  comments: {
    width: "100%",
    borderRadius: "7px",
    marginLeft: "1%",
  },
  paper: {
    marginBottom: "1%",
    display: "inline-block",
    backgroundColor: "#9c27b026",
    overflowWrap: "anywhere",
  },
  commentsHeader: {
    height: "10%",
    backgroundColor: "#9c27b0",
    textAlign: "center",
    fontSize: "large",
    borderRadius: "34px",
    color: "black",
  },
  alert: {
    width: "20%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  Commentsbox: {
    [theme.breakpoints.down("sm")]: {},
    mobileScreenCommentBox: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        display: "block",
      },
    },
  },
}));

export function getArticles(category) {
  fetch(`${baseUrl}/article/${category}`).then((res) => {
    return res.json();
  });
}
