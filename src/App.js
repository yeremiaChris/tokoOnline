import Topbar from "./components/topBar";
import Carausel from "./components/carausel";
import Grid from "@material-ui/core/Grid";
import Iklan from "./components/iklan";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content">
        <Grid container style={{ width: 1280 }}>
          <Grid item xs={8} lg={8} sm={8} md={8}>
            <Carausel />
          </Grid>
          <Grid item xs={4} lg={4} sm={4} md={4}>
            <Iklan />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
