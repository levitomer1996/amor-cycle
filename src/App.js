import React from "react";
import logo from "./logo.svg";
//Material
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

//Components
import Header from "./components/header/Header";
import Main from "./components/Main/Main";

//React Router
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducers/LoggedUser.reducer";
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Amor-cycle" />
            <Main />
          </Container>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
