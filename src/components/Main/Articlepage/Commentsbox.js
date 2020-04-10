import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./articlepage.module";

import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Comment from "./Comment";

function Commentsbox(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.Commentsbox}>
        <div className={classes.comments}>
          <div style={{ marginLeft: "3%" }}>
            <Comment user="Tomer" content="Very good" />
            <TextField
              id="standard-basic"
              label="Type Comment here."
              placeholder="Type comment here"
            />
            <IconButton>
              <SendIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Commentsbox;
