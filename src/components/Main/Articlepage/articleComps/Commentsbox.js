import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../articlepage.module";

import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Comment from "./Comment";

import { baseUrl } from "../../../../serverURL";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

//Alert if client is not logged in to his user.
import MuiAlert from "@material-ui/lab/Alert";

function Commentsbox(props) {
  function Alert(props) {
    return (
      <MuiAlert
        className={classes.alert}
        elevation={6}
        variant="filled"
        {...props}
      />
    );
  }

  const classes = useStyles();
  //New Comment content that will be added.
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isFetched, setisFetched] = useState(false);
  const [isAlert, setIsAlert] = useState(true);
  const { id } = useParams();

  async function postComment(content, user) {
    if (!props.isLogged) {
      setIsAlert(true);
      setTimeout(() => {
        setIsAlert(false);
      }, 4000);
      return;
    } else {
      const { f_name, l_name } = props;
      const userOwner = `${f_name} ${l_name}`;
      console.log(userOwner);
      fetch(`${baseUrl}/comment/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("at")}`,
        },
        body: JSON.stringify({
          content: newComment,
          article: props.id,
          ownerName: `${props.f_name} ${props.l_name}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {});
    }
  }

  function rednerUserNotLoggedError() {
    if (isAlert) {
      return <Alert severity="error">Must be logged in to your user.</Alert>;
    } else {
      return;
    }
  }

  function getArticle(id) {
    if (!isFetched) {
      fetch(`${baseUrl}/article/getarticlebyid/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setisFetched(true);
        });
    } else {
      return;
    }
  }

  return (
    <React.Fragment>
      {getArticle(id)}
      <div className={classes.Commentsbox}>
        <div className={classes.commentsHeader}>Comments</div>
        <div className={classes.comments}>
          <div style={{ marginLeft: "3%", marginTop: "3%" }}>
            {comments.map((com) => {
              return <Comment content={com.content} name={com.ownerName} />;
            })}

            <TextField
              id="standard-basic"
              label="Type Comment here."
              placeholder="Type comment here"
              onChange={(e) => {
                setNewComment(e.target.value);
              }}
            />

            <IconButton onClick={() => postComment(newComment, props.username)}>
              <SendIcon />
            </IconButton>
            {rednerUserNotLoggedError()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  (state) => ({
    isLogged: state.isLogged,
    username: state.username,
    f_name: state.f_name,
    l_name: state.l_name,
  }),
  {}
)(Commentsbox);
