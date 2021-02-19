import React from "react";
import Topbar from "./components/topBar";
import Carausel from "./components/carausel";
import { Grid, makeStyles } from "@material-ui/core";
import Iklan from "./components/iklan";
import "./App.css";
import Jenis from "./components/content/jenis";
import Kategori from "./components/content/kategori";
import Footer from "./components/footer";
import Content from "./components/content/content";
import TopMenu from "./components/topMenu";
import ButtonSortCategori from "./components/content/ButtonSortCategori";
import DetailContent from "./components/content/detailContent";
import NotFound from "./components/notFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
// add form
import AddItem from "./components/content/addItem";
import ScrollToTop from "./scrollTop";
import DaftarItem from "./components/content/daftarItem";
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
  menuButton: {
    backgroundColor: "red",
  },
}));

function App() {
  console.log(new Date());
  const styles = useStyles();
  // redux
  const store = createStore(rootReducer);

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Topbar />
          <div className={styles.content} style={{ marginBottom: 120 }}>
            <Grid
              container
              className={styles.container}
              style={{
                position: "fixed",
                zIndex: 1,
              }}
            >
              <TopMenu />
            </Grid>
          </div>
          <div className={styles.content} style={{ marginBottom: 0 }}>
            <Grid container className={styles.container}>
              <ButtonSortCategori />
            </Grid>
          </div>
          <ScrollToTop history={createBrowserHistory()} />
          <Switch>
            <Route exact path="/">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <Grid item xs={12} lg={8} sm={12} md={8}>
                    <Carausel />
                  </Grid>
                  <Grid item xs={12} lg={4} sm={12} md={4}>
                    <Iklan />
                  </Grid>
                </Grid>
              </div>
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <Kategori />
                </Grid>
              </div>
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <Jenis />
                </Grid>
              </div>
            </Route>
            <Route path="/content">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <Content />
                </Grid>
              </div>
            </Route>
            <Route path="/daftar">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <DaftarItem />
                </Grid>
              </div>
            </Route>
            <Route path="/detail/:slug">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <DetailContent />
                </Grid>
              </div>
            </Route>
            <Route path="/addItem">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <AddItem />
                </Grid>
              </div>
            </Route>
            <Route path="/editItem/:slug">
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <AddItem />
                </Grid>
              </div>
            </Route>
            <Route>
              <div className={styles.content}>
                <Grid container className={styles.container}>
                  <NotFound />
                </Grid>
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
