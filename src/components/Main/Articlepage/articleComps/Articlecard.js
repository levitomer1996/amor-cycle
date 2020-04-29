import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ForwardIcon from "@material-ui/icons/Forward";
import IconButton from "@material-ui/core/IconButton";
import { green } from "@material-ui/core/colors";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  card: {
    marginLeft: "4%",
    marginBottom: "3%",
    fontFamily: "roboto",
    borderRadius: "18px",
    background: "white",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.9) ",
    textAlign: "center",
    display: "inline-block",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
    },
  },
  cardImage: {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    backgroundSize: "cover",
  },
  img: {
    height: "190px",
    width: "286px",
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
    <Card className={classes.card}>
      <Card.Img variant="top" src={props.img} className={classes.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.time_Created}</Card.Text>
        <Button style={{ background: "#1bcd0f" }}>
          <Link
            to={`/articlepage/${props.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Read
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Articlecard;
