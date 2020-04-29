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
    textAlign: "justify",
    textJustify: "inter-word",
    fontFamily: "Bradley Hand",
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
          {articleState.content} t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). t is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </div>
      </div>
      <Commentsbox />
    </div>
  );
}

export default ReadArticlePage;
