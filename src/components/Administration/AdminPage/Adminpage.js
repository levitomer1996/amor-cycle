import React from "react";

import { connect } from "react-redux";
import { SET_LOGIN } from "../../../redux/actions/userActions";
import { render } from "@testing-library/react";
import SimpleTabs from "./AdminPageTabs";

function Adminpage(props) {
  if (!props.isAdmin) {
    return (
      <div>
        <h1>Page restricted please return</h1>
      </div>
    );
  } else {
    return <SimpleTabs />;
  }
}

export default connect(
  (state) => ({
    isLogged: state.isLogged,
    isAdmin: state.isAdmin,
    username: state.username,
  }),
  { SET_LOGIN }
)(Adminpage);
