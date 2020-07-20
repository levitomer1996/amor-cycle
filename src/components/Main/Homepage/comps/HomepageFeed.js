import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import FeedCard from "./FeedCard";
import ArticleCard from "../../Articlepage/articleComps/Articlecard";
import CircularProgress from "@material-ui/core/CircularProgress";

import { baseUrl } from "../../../../serverURL";

import { connect } from "react-redux";
import { SET_FEED } from "../../../../redux/actions/feedActions";

import useStyles from "../Homepage";

class HomepageFeed extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showSpinnder: false,
  };

  renderSpinnder() {
    if (this.state.showSpinnder) {
      return <CircularProgress />;
    } else {
      return;
    }
  }

  async componentDidMount() {
    const { SET_FEED } = this.props;
    this.setState({ showSpinnder: true });
    const fetchArticles = await fetch(`${baseUrl}/article/getall/feed`);
    const articles = await fetchArticles.json();
    this.setState({ showSpinnder: false });
    SET_FEED(articles);
  }

  render() {
    return (
      <div>
        <div
          style={{
            borderBottom: " 5px solid #00000017",
            fontSize: "50px",
            marginBottom: "3%",
            color: "#4682b47a",
            fontFamily: "cursive",
          }}
        >
          <strong>Articles</strong>{" "}
        </div>
        <Container>
          {this.renderSpinnder()}
          {this.props.articles.map((article) => {
            return (
              <FeedCard
                img={article.img}
                title={article.title}
                time_Created={article.time_Created}
                content={article.content}
                likes={article.likes}
                id={article.id}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
  }),
  { SET_FEED }
)(HomepageFeed);
