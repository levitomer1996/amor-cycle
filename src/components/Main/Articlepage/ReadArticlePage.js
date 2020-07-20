import React, { useState } from "react";
import { baseUrl } from "../../../serverURL";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Commentsbox from "./articleComps/Commentsbox";
import { Container } from "react-bootstrap";
import ShareModal from "./articleComps/ShareModal";

import { Helmet } from "react-helmet";

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
  const [modalShow, setModalShow] = useState(false);
  const classes = useStyles();
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{articleState.title}</title>
        <meta name={articleState.title} content={articleState.content} />
      </Helmet>
      <ShareModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={articleState.id}
      />
      <div className={classes.root}>
        {getArticle(id)}
        <div>
          <img src={articleState.img} className={classes.img}></img>
        </div>
        <div className={classes.content}>
          <IconButton
            style={{ float: "right" }}
            onClick={() => setModalShow(true)}
          >
            <ShareIcon fontSize="inherit" />
          </IconButton>

          <h1>{articleState.title}</h1>

          <strong style={{ fontSize: "20px", fontFamily: "Book Antiqua" }}>
            {articleState.content}
          </strong>
        </div>
      </div>

      <Commentsbox id={articleState.id} comments={articleState.comments} />
    </Container>
  );
}

export default ReadArticlePage;
