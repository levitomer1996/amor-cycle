import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Paper } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2%",
    width: "100%",
    backgroundColor: "#ffc10726",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 345,
    },
  },
  media: {
    height: 140,
  },
}));

export default function FeedCard(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Link to={`articlepage/${props.id}`}>
        <IconButton style={{ float: "right" }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <div style={{ marginLeft: "2%" }}>
        <h2 style={{ display: "block", fontFamily: "cursive" }}>
          {props.title}
        </h2>{" "}
        <h5>{props.time_Created}</h5>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {props.content}
        </div>
      </div>
    </Paper>
  );
}
