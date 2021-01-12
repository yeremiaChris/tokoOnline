import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";

// styles
const useStyles = makeStyles((theme) => ({
  atas: {
    height: 195,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 150,
      margin: 0,
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    justifySelf: "center",
  },
  container: {
    height: 400,
    alignContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      alignContent: "start",
      height: 400,
      marginBottom: 110,
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      height: 200,
    },
  },

  // hover
  black: {
    backgroundColor: "black",
    [theme.breakpoints.down("xs")]: {
      height: 150,
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
    position: "relative",
    height: 195,
    display: "grid",
    alignItems: "center",
    zIndex: -2,
  },
  button: {
    position: "relative",
    height: 50,
    marginBottom: -200,
    justifySelf: "center",
    zIndex: 9999999,
  },
  buttonContent: {
    borderColor: "white",
    color: "white",
  },
}));

function Iklan() {
  // var styles
  const styles = useStyles();
  // iklan
  const iklanItem = [
    {
      nama: "Iklan 1",
      key: "1",
      class: styles.atas,
      gambar: Gambar,
      opacity: 1,
      display: "none",
    },
    {
      nama: "Iklan 2",
      key: "2",
      class: styles.atas,
      gambar: GambarDua,
      opacity: 1,
      display: "none",
    },
  ];
  const [hover, setHover] = React.useState(iklanItem);
  // hover:
  const mouseEnter = (index) => {
    setHover(
      hover.map((item) =>
        item.key === index
          ? { ...item, opacity: 0.5, display: "inline-block" }
          : item
      )
    );
  };
  const mouseLeave = (index) => {
    setHover(
      hover.map((item) =>
        item.key === index ? { ...item, opacity: 1, display: "none" } : item
      )
    );
  };

  return (
    <Grid container className={styles.container} justify="space-between">
      {hover &&
        hover.map((item) => {
          return (
            <Grid item xs={12} sm={6} lg={12} md={12} key={item.key}>
              <div
                onMouseEnter={() => mouseEnter(item.key)}
                onMouseLeave={() => mouseLeave(item.key)}
              >
                <div className={styles.black}>
                  <div className={styles.button}>
                    <Button
                      className={styles.buttonContent}
                      style={{ display: item.display }}
                      variant="outlined"
                    >
                      View
                    </Button>
                  </div>
                  <div
                    style={{
                      backgroundImage: "url(" + item.gambar + ")",
                      transition: ".2s",
                      opacity: item.opacity,
                    }}
                    className={item.class}
                  ></div>
                </div>
              </div>
            </Grid>
          );
        })}
    </Grid>
  );
}
export default Iklan;
