import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

import Routes from "./routes";
// add form
const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1050,
    justifySelf: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      marginRight: 10,
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: 10,
      paddingLeft: 10,
    },
    marginBottom: 10,
  },
  content: {
    display: "grid",
  },
}));

function App() {
  const styles = useStyles();
  // redux
  const store = createStore(rootReducer);

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Routes />
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
