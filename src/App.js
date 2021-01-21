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
// menu list
const menuList = [
  {
    name: "New Arrivals",
    key: "1",
    icon: false,
  },
  {
    name: "Collaboration",
    key: "2",
    icon: true,
  },
  {
    name: "Collection",
    key: "3",
    icon: true,
  },
  {
    name: "All Products",
    key: "4",
    icon: true,
  },
  {
    name: "New Normal Essentials",
    key: "5",
    icon: false,
  },
  {
    name: "Mix and Match",
    key: "6",
    icon: false,
  },
  {
    name: "Payment Confirmation",
    key: "7",
    icon: false,
  },
];
// akhir menu list

// awal side menu categories
// side button
const sideButton = [
  {
    key: "1",
    name: "All Products",
  },
  {
    key: "2",
    name: "Featured Products",
  },
  {
    key: "3",
    name: "Bundled Products",
  },
];
const sideButtonDua = [
  {
    key: "1",
    name: "Tops",
  },
  {
    key: "2",
    name: "Bottoms",
  },
  {
    key: "3",
    name: "Latest",
  },
  {
    key: "4",
    name: "Cheapest",
  },
];

// akhir sidebar categoris

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
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className={styles.content}>
          <Grid container className={styles.container}>
            <TopMenu menuList={menuList} />
          </Grid>
        </div>
        <div className={styles.content}>
          <Grid container className={styles.container}>
            <ButtonSortCategori
              menuList={menuList}
              sideButtonDua={sideButtonDua}
              sideButton={sideButton}
            />
          </Grid>
        </div>
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
                <Content
                  sideButton={sideButton}
                  sideButtonDua={sideButtonDua}
                />
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
    </Router>
  );
}

export default App;
