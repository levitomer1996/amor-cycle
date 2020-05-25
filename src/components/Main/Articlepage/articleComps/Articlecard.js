import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { baseUrl } from "../../../../serverURL";

import { connect } from "react-redux";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "245px",
//     marginBottom: "2%",
//     display: "inline-block",
//     marginLeft: "2%",
//   },
//   media: {
//     height: 140,
//   },
// }));

class Articlecard extends Component {
  state = {
    isLiked: false,
    likes: this.props.likes,
  };

  setLike() {
    if (!this.state.isLiked) {
      fetch(`${baseUrl}/like/addlike`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("at")}`,
        },
        body: JSON.stringify({ article: this.props.id }),
      })
        .then((res) => res.json())
        .then(this.setState({ isLiked: true }), console.log(this.state));
    }
  }

  render() {
    let likeButton;
    if (!this.props.likesArray) {
      likeButton = (
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      );
    } else {
      let isExist = this.props.likesArray.some(
        (obj) => obj.id === this.props.userId
      );
      console.log(this.props.likesArray);
      if (isExist) {
        likeButton = (
          <IconButton>
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
        );
      } else {
        likeButton = (
          <IconButton onClick={() => this.setLike()}>
            <FavoriteBorderIcon />
          </IconButton>
        );
      }
    }

    return (
      <Card
        style={{
          width: "245px",
          marginBottom: "2%",
          display: "inline-block",
          marginLeft: "5%",
          marginTop: "3%",
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: 140 }}
            image={this.props.img}
            title={this.props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.time_Created}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/articlepage/${this.props.id}`}>Read</Link>
          </Button>

          <strong> {this.props.likes}</strong>
          {likeButton}
        </CardActions>
      </Card>
    );
  }
}
export default connect(
  (state) => ({
    userId: state.userId,
  }),
  {}
)(Articlecard);
