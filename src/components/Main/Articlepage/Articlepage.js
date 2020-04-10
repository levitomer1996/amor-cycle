import React from "react";
import { useStyles } from "./articlepage.module";
import Commentsbox from "./Commentsbox";
function Articlepage(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1 className={classes.title}>Flex for Flax</h1>
      <div className={classes.topContainer}>
        <div>
          <img
            src="https://i.imgur.com/93B3Ctc.png"
            className={classes.topIMG}
          ></img>
        </div>
        <div>
          <strong>
            So, I feel as though it is time to share my love of flaxseeds with
            you all. Firstly, the benefits of flaxseeds are extremely essential
            for those vegan, vegetarian, and meat lovers. Secondly, they are
            affordable, easily accessible, and can be added to an assortment of
            dishes. I am currently a vegetarian, more specifically, the only
            animal products I consume are some dairy products such as swiss
            cheese and yogurts, canned tuna, and eggs; otherwise my diet is
            strictly plant based. However, when I was going through my vegan
          </strong>
        </div>
      </div>
      <div>
        So, I feel as though it is time to share my love of flaxseeds with you
        all. Firstly, the benefits of flaxseeds are extremely essential for
        those vegan, vegetarian, and meat lovers. Secondly, they are affordable,
        easily accessible, and can be added to an assortment of dishes. I am
        currently a vegetarian, more specifically, the only animal products I
        consume are some dairy products such as swiss cheese and yogurts, canned
        tuna, and eggs; otherwise my diet is strictly plant based. However, when
        I was going through my vegan phase, I was always on the lookout to
        replace my morning omelet or scrambled eggs. Living here in the middle
        East especially, a classic omelet or scrambled eggs is an essential
        component of the classic Israeli breakfast. I searched online as well as
        my local grocery stores and discovered flax. When I came home however, I
        looked up a recipe for vegan omelet using flax seeds. I unfortunately,
        soon realized that flax seeds are more of a replacement for eggs in
        cooking and baking such as making vegan meatballs (so delicious FYI).
        Having stocked up on this ever so "useful" seed, I began reading more
        about it to see where it can be used so that the stock I had bought
        won't simply go to waste. What I came to realize was absolutely amazing!
        Flaxseeds I discovered are an incredible source of nutrients, Omeg-3
        fats, fiber, reduces cholesterol and so much more. By simply springing a
        table spoon or two over my morning oatmeal, adding it to a shake or
        incorporating it to my Matza ball soup recipe, i.e. Passover is right
        around the corner; not only am I hitting at least 3 of the necessary
        components needed for a well-rounded meal but, I can easily store it for
        long periods of time without having to worry about short expiry dates. I
        highly recommend for those of us looking to incorporate more natural and
        raw ways of adding beneficial aspects to our diet no matter what ones'
        preferences are.
      </div>
      <Commentsbox />
    </React.Fragment>
  );
}

export default Articlepage;
