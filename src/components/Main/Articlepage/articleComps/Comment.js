import React from "react";
import { useStyles } from "../articlepage.module";
import Paper from "@material-ui/core/Paper";
function Comment(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.paper}>
        <strong style={{ display: "block" }}>Random</strong> {props.content}
      </Paper>
    </div>
  );
}

export default Comment;
