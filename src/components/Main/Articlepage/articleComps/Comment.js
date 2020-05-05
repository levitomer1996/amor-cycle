import React from "react";

//Material and style
import { useStyles } from "../articlepage.module";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";

//redux
import { connect } from "react-redux";
import { baseUrl } from "../../../../serverURL";
function Comment(props) {
  //delete comment (only admin allowed.)
  function deleteComment(id) {
    if (props.isAdmin) {
      fetch(`${baseUrl}/comment/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("at")}`,
        },
      }).then((data) => console.log(data));
    } else {
      return;
    }
  }

  const classes = useStyles();
  if (props.isAdmin) {
    return (
      <div>
        <Paper className={classes.paper}>
          <div>
            <strong style={{ display: "inline-block" }}>{props.name}</strong>
            <IconButton
              style={{ float: "right" }}
              onClick={() => deleteComment(props.id)}
            >
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
            <strong style={{ display: "inline-block" }}>{props.name}</strong>
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
