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
        <ArticleCard
          time_Created={"Apr 27th 20"}
          title={"Sharon article"}
          content={"Content - fdsafdsjnfkjdasnfkjasdfdsa"}
          img={
            "https://addons-media.operacdn.com/media/CACHE/images/themes/05/126105/1.0-rev1/images/d197fa99-897f-46a6-954e-c6f852179897/7eaf8a54a1a9a12b0f383fdb050ae52c.jpg"
          }
        />
        {articleListState.map((article) => {
          return (
            <ArticleCard
              id={article.id}
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

export default Articlepage;
