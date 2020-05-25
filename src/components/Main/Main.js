import React from "react";
import Homepage from "./Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Registerpage from "./Signup_in/Registerpage";
import Articlepage from "./Articlepage/Articlepage";
import SignIn from "./Sign_in/Signinpage";
import Adminpage from "../Administration/AdminPage/Adminpage";
import ReadArticlePage from "./Articlepage/ReadArticlePage";
import UserPanelPage from "./UserPanel/UserPanelPage";

function Main(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Registerpage} />
        <Route exact path="/ap" component={Adminpage} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/userpanel" component={UserPanelPage} />
        <Route path="/article/:category" component={Articlepage} />
        <Route path="/articlepage/:id" component={ReadArticlePage} />
      </Switch>
    </div>
  );
}

export default Main;
