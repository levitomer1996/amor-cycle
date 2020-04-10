import React from "react";
import Homepage from "./Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Registerpage from "./Signup_in/Registerpage";
import Articlepage from "./Articlepage/Articlepage";
import SignIn from "./Sign_in/Signinpage";

function Main(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Registerpage} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/articlespage" component={Articlepage} />
      </Switch>
    </div>
  );
}

export default Main;
