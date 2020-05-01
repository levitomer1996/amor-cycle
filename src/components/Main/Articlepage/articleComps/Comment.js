import React from "react";

//Material and style
import { useStyles } from "../articlepage.module";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

//redux
import { connect } from "react-redux";
function Comment(props) {
  const classes = useStyles();
  if (props.isAdmin) {
    return (
      <div>
        <Paper className={classes.paper}>
          <div>
            <strong style={{ display: "inline-block" }}>{props.name}</strong>
            <IconButton style={{ float: "right" }}>
              <ClearIcon fontSize={"small"} />
            </IconButton>
          </div>
          {props.content}
        </Paper>
      </div>
    );
  } else {
    return (
      <div>
        <Paper className={classes.paper}>
          <div>
            <strong style={{ display: "inline-block" }}>Random</strong>
          </div>
          {props.content}
        </Paper>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    isAdmin: state.isAdmin,
  }),
  {}
)(Comment);
