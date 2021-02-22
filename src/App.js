import React from "react";
import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

import Routes from "./routes";

function App() {
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
