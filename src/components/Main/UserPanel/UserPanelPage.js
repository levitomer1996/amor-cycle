import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PanelMenu from "./PanelMenu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class UserPanelPage extends Component {
  render() {
    return (
      <div>
        <PanelMenu />
      </div>
    );
  }
}

export default UserPanelPage;
