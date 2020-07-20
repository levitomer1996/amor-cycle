import React from "react";
import { connect } from "react-redux";

import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

function Profilepage(props) {
  if (!props.isLogged) {
    return (
      <div>
        <h1>Please Login</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <IconButton style={{ float: "right" }}>
            <EditIcon />
          </IconButton>
          <div style={{ display: "inline-block" }}>
            <h3>
              <strong>First name:</strong> {props.f_name}
            </h3>
          </div>
          <div style={{ display: "block" }}>
            {" "}
            <h3>
              <strong>Last name:</strong> {props.l_name}
            </h3>
          </div>
          <div style={{ display: "block" }}>
            <h3>
              <strong>User-name:</strong> {props.username}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    f_name: state.f_name,
    l_name: state.l_name,
    userId: state.userId,
    isLogged: state.isLogged,
    username: state.username,
  }),
  {}
)(Profilepage);
