import React, { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import FeedCard from "./FeedCard";
import ArticleCard from "../../Articlepage/articleComps/Articlecard";
import CircularProgress from "@material-ui/core/CircularProgress";

import { baseUrl } from "../../../../serverURL";

import { connect } from "react-redux";
import { SET_FEED } from "../../../../redux/actions/feedActions";

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
      <Container>
        {this.renderSpinnder()}
        {this.props.articles.map((article) => {
          return (
            <ArticleCard
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
    );
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
  }),
  { SET_FEED }
)(HomepageFeed);
