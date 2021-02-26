import React from "react";
import "./App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import thunk from "redux-thunk";
import Routes from "./routes";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));

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
