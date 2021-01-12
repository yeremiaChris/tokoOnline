import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";

// styles
const useStyles = makeStyles((theme) => ({
  container: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      height: 400,
      height: 300,
    },
    display: "flex",
  },
  iklan: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 195,
    [theme.breakpoints.down("sm")]: {
      width: "99%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 145,
    },
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
  },
  coverItem: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  button: {
    backgroundColor: "black",
    color: "white",
  },
  buttonContainer: {
    zIndex: 1,
    backgroundColor: "red",
    marginBottom: -100,
  },
}));

const iklanState = [
  {
    key: "1",
    gambar: Gambar,
    flex: "start",
  },
  {
    key: "2",
    gambar: GambarDua,
    flex: "flex-end",
  },
];

function Iklan() {
  // var styles
  const styles = useStyles();

  // state iklan
  const [iklan, setIklan] = React.useState(iklanState);
  return (
    <Grid
      container
      className={styles.container}
      alignContent="space-between"
      justify="space-between"
    >
      {iklan &&
        iklan.map((item) => {
          return (
            <>
              <Grid
                className={styles.coverItem}
                style={{
                  justifyContent: item.flex,
                }}
                item
                lg={12}
                md={12}
                sm={6}
                xs={12}
                key={item.key}
              >
                <div
                  style={{
                    backgroundImage: "url(" + item.gambar + ")",
                  }}
                  className={styles.iklan}
                ></div>
              </Grid>
            </>
          );
        })}
    </Grid>
  );
}
export default Iklan;
