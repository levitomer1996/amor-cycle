import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  about: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    height: "100%",
  },
  headerText: {
    fontFamily: "Comic Sans MS",
    borderBottom: "2px solid black",
  },
}));

function About(props) {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.headerText}>About</h1>
      <div className={classes.about}>
        <div>
          One of the most important things I want to share with you all before I
          begin talking about my journey is that we must remember that each
          person’s journey is unique. What I do in my life is not necessarily
          right for another person. I believe however, that by displaying my
          journey, my overall process, as well as finding and choosing what
          works for me will help you in formulating your own routine, habits and
          eventually put you on your own unique journey. The other thing that is
          really important here is the that am not a fitness and health expert,
          nutritionist or dietician. I am also not someone who makes my living
          from this area in life. I will show you how to incorporate a healthy
          lifestyle into your every-day routine. Growing up I had always loved
          to play sports. I played basketball and ran track throughout all of
          middle and high school. I never really define myself as “skinny”
          simply by comparison to the other girls in my school however in
          comparison when going to get checked by the doctor, I was defined
          overweight according to BMI and other measurements. I remember just
          always being so active never really paid attention to what I hate or
          the portion size. I also grew up in home where traditional cooking was
          part of our family custom, meaning home cooked meals in large portions
          were readily available. I never had trouble buying cloths, just would
          always but a bigger size. After high school, I moved to Israel (I have
          Israeli citizenship) and joined the military. During the military, I
          learned a lot of physical fitness and actually had a lot of success in
          weight loss during my basic, advanced and special training ( a year
          and a month in total), however when I was discharged and went back to
          my civilian life, I still remained highly active, but my eating habits
          didn’t really change all that much. It was only during my last
          semester of studying for my bachelors, that I decided to seek
          professional expertise to help formulate proper nutrition as well as
          the necessary exercise for my own body. Again, here it is important to
          mention, that we might believe that we eat “healthy”, meaning we don’t
          eat junk food for 3 or more meals a day but, that doesn’t necessarily
          mean that we are eating the necessary fats, proteins, carbohydrates
          etc. for our unique body type. For example, an average 32, healthy
          year - old man might need more protein intake for his daily
          nutritional needs than I do but, maybe is natural sugar intake will be
          lower. Week by week, I will share different things I discovered
          throughout my journey, the tips and values I learned and instill in my
          life. Grow
        </div>
      </div>
    </>
  );
}

export default About;
