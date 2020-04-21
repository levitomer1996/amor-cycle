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
    width: "100%",
  },
  comments: {
    width: "100%",
    border: "1px solid black",
    marginLeft: "1%",
  },
  paper: {
    marginBottom: "1%",
    display: "inline-block",
    backgroundColor: "#0be8082e",
  },
}));

export function getArticles(category) {
  fetch(`${baseUrl}/article/${category}`).then((res) => {
    return res.json();
  });
}
