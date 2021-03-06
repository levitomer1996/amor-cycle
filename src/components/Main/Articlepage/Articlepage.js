import React, { useState, useEffect } from "react";
import { useStyles } from "./articlepage.module";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../serverURL";
import { Paper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArticleCard from "./articleComps/Articlecard";

function Articlepage(props) {
  //Page style.
  const classes = useStyles();
  //Category params.
  const { category } = useParams();
  //State
  const [articleListState, setArticleListState] = useState([]);
  const [isFetched, setIsFetched] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    isError: false,
    error: "",
  });
  const [spinner, setSpinner] = useState(false);

  function getArticles(category) {
    if (isFetched !== category) {
      fetch(`${baseUrl}/article/${category}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.statusCode === 500) {
            setArticleListState([]);
            setErrorMessage({ isError: true, error: data.message });
          } else {
            setErrorMessage({ isError: false, error: "" });

            setArticleListState(data);
          }

          setIsFetched(category);
          return;
        });
    } else {
      return;
    }
  }
  function renderSpinner(spinner) {
    if (!spinner) {
      return;
    } else {
      return <CircularProgress />;
    }
  }

  return (
    <div>
      {getArticles(category)}
      {renderSpinner(spinner)}
      <div>
        {articleListState.map((article) => {
          return (
            <ArticleCard
              id={article.id}
              time_Created={article.time_Created}
              title={article.title}
              content={article.content}
              img={article.img}
              likes={article.like.length}
              likesArray={article.like}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Articlepage;
