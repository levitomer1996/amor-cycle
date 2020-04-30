import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "../articlepage.module";

import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Comment from "./Comment";

import { baseUrl } from "../../../../serverURL";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Commentsbox(props) {
  const classes = useStyles();
  const commentsList = [
    { user: "Tomer", content: "Very good" },
    { user: "Jesus", content: " God bless you" },
    { user: "Jesus", content: " God bless you" },
    {
      user: "Jesus",
      content:
        " kjdfbasfadsbakfndasbjfbdkjasbfkjdasbfjkdasbfkjdsbafkjdasbkfjbadsjfbadsjkfbdjksabfsabfdsabfjkdsbafjkdsbafjkbdsajkfbdskjafbdjksabfjkdasbfksdbajkbkjbfjkdsbkjfdsbfbadkjsbfdjksabfjkdsabfjkadsbjkfbadsjk",
    },
  ];
  //New Comment content that will be added.
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isFetched, setisFetched] = useState(false);
  const { id } = useParams();

  async function postComment(content, user) {
    fetch(`${baseUrl}/comment/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("at")}`,
      },
      body: JSON.stringify({ content: newComment, article: props.id }),
    })
      .then((res) => res.json())
      .then((data) => {});
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
              return <Comment content={com.content} />;
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
  }),
  {}
)(Commentsbox);
