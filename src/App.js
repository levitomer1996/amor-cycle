import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
//Material
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./components/header/Header";
import MobileHeader from "./components/header/MobileHeader";
import Main from "./components/Main/Main";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";

//React Router
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers/LoggedUser.reducer";

import { baseUrl } from "./serverURL";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Header title="Amor cycle" />
          <MobileHeader />
          <Main />
          <BottomNavbar />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
