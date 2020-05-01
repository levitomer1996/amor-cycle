import React, { useState } from "react";
import { baseUrl } from "../../../serverURL";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Commentsbox from "./articleComps/Commentsbox";

//Page styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
    },
  },
  img: {
    width: "320px",
    height: "320px",
  },
  content: {
    overflowWrap: "anywhere",
    fontFamily: "Courier New",
  },
  mobileScreenCommentBox: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      display: "block",
    },
  },
}));

function ReadArticlePage(props) {
  //Get chosen article data.
  function getArticle(id) {
    if (!isFetched) {
      fetch(`${baseUrl}/article/getarticlebyid/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setArticleState(data);
          setisFetched(true);
        });
    } else {
      return;
    }
  }
  const { id } = useParams();
  const [articleState, setArticleState] = useState({});
  const [isFetched, setisFetched] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {getArticle(id)}
        <div>
          <img src={articleState.img} className={classes.img}></img>
        </div>
        <div className={classes.content}>
          <h1>{articleState.title}</h1>
          <strong style={{ fontSize: "20px", fontFamily: "Book Antiqua" }}>
            {articleState.content}
          </strong>
        </div>
      </div>

      <Commentsbox id={articleState.id} comments={articleState.comments} />
    </div>
  );
}

export default ReadArticlePage;
