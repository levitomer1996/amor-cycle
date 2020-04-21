import React, { useState, useEffect } from "react";
import { useStyles } from "./articlepage.module";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../serverURL";
import { Paper } from "@material-ui/core";
import ArticleCard from "./Articlecard";

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
  function renderArticleList() {
    if (!errorMessage.isError) {
      // const listItems = articleListState.map((number) => <li>{number}</li>);
      // return <ul>{listItems}</ul>;
    }
  }

  return (
    <div>
      {getArticles(category)}
      <div>
        {articleListState.map((article) => {
          return (
            <ArticleCard
              time_Created={article.time_Created}
              title={article.title}
              content={article.content}
              img={article.img}
            />
          );
        })}
      </div>
    </div>
  );
}

function cac(x, y) {
  return x + y;
}

export default Articlepage;
