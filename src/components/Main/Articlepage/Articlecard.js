import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

export const useStyles = makeStyles((theme) => ({
  card: {
    display: "grid",
    gridTemplateColumns: "20% 70%",
    marginBottom: "3%",
    fontFamily: "roboto",
    borderRadius: "18px",
    background: "white",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.9) ",
    textAlign: "center",
    width: "100%",
  },
  cardImage: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    backgroundSize: "cover",
  },
  img: {
    width: "300px",
    height: "250px",
  },
  cardText: {
    margin: "25px",
  },
  date: {
    color: "black",
    fontSize: "20px",
  },
  p: { color: "grey", fontSize: "20px", overflow: "hidden" },
  read: {
    float: "right",
    backgroundColor: "#4CAF50",
  },
}));

function Articlecard(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardImage}>
        <img className={classes.img} src={props.img}></img>
      </div>
      <div className={classes.cardText}>
        <span classNam={classes.date}>
          {" "}
          Create at: <strong>{props.time_Created}</strong>
        </span>
        <h1>{props.title}</h1>
      </div>
      <Button variant="contained" color="primary" className={classes.read}>
        Read
      </Button>
    </div>
  );
}

export default Articlecard;
