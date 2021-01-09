import Topbar from "./components/topBar";
import Carausel from "./components/carausel";
import Grid from "@material-ui/core/Grid";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12} lg={12} sm={12} md={12} style={{ maxWidth: 1280 }}>
          <Carausel />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
