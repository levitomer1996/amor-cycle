import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import HomepageFeed from "./comps/HomepageFeed";
import Mainpost from "./Mainpost";
import HomepageRight from "./HomepageRight";

import { Switch, Route } from "react-router-dom";
export const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rootMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
  feed: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Homepage(props) {
  const classes = useStyles();
  const { title } = props;
  const post = {
    title: "Flex for Flax",
    date: "April 6th, 202",
    description: `So, I feel as though it is time to share my love of flaxseeds with you all. Firstly, the benefits of flaxseeds are extremely essential for those vegan, vegetarian, and meat lovers. Secondly, they are affordable, easily accessible, and can be added to an assortment of dishes. I am currently a vegetarian, more specifically, the only animal products I consume are some dairy products such as swiss cheese and yogurts, canned tuna, and eggs; otherwise my diet is strictly plant based. However, when I was going through my vegan phase, I was always on the lookout to replace my morning omelet or scrambled eggs. Living here in the middle East especially, a classic omelet or scrambled eggs is an essential component of the classic Israeli breakfast. I searched online as well as my local grocery stores and discovered flax. When I came home however, I looked up a recipe for vegan omelet using flax seeds. I unfortunately, soon realized that flax seeds are more of a replacement for eggs in cooking and baking such as making vegan meatballs (so delicious FYI). Having stocked up on this ever so "useful" seed, I began reading more about it to see where it can be used so that the stock I had bought won't simply go to waste. What I came to realize was absolutely amazing! Flaxseeds I discovered are an incredible source of nutrients, Omeg-3 fats, fiber, reduces cholesterol and so much more. By simply springing a table spoon or two over my morning oatmeal, adding it to a shake or incorporating it to my Matza ball soup recipe, i.e. Passover is right around the corner; not only am I hitting at least 3 of the necessary components needed for a well-rounded meal but, I can easily store it for long periods of time without having to worry about short expiry dates. I highly recommend for those of us looking to incorporate more natural and raw ways of adding beneficial aspects to our diet no matter what ones' preferences are.`,
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Row>
          <Col xs={8} style={{ borderRight: "1px solid black" }}>
            {" "}
            <HomepageFeed />
          </Col>
          <Col>
            {" "}
            <HomepageRight />
          </Col>
        </Row>
      </div>
      <div className={classes.rootMobile}>
        <HomepageFeed />
      </div>
    </Container>
  );
}

Homepage.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
