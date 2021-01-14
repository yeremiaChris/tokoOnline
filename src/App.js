import Topbar from "./components/topBar";
import Carausel from "./components/carausel";
import { Grid, makeStyles } from "@material-ui/core";
import Iklan from "./components/iklan";
import "./App.css";
import Jenis from "./components/content/jenis";
import Kategori from "./components/content/kategori";
import Footer from "./components/footer";
import Content from "./components/content/content";
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
    <div className="App">
      <Topbar />
      <div className={styles.content}>
        <Grid container className={styles.container}>
          <Content />
        </Grid>
      </div>
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

      <Footer />
    </div>
  );
}

export default App;
