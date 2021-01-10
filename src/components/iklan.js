import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";

const useStyles = makeStyles((theme) => ({
  atas: {
    height: 195,
    [theme.breakpoints.down("xs")]: {
      // height: 130,
      width: "100%",
      height: 150,
      marginBottom: 10,
    },
    backgroundImage: "url(" + Gambar + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      marginRight: 5,
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  bawah: {
    height: 195,
    backgroundImage: "url(" + GambarDua + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      marginLeft: 5,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      height: 150,
      marginBottom: 10,
    },
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  container: {
    height: 400,
    alignContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      alignContent: "start",
      height: 400,
      marginBottom: 110,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      height: 200,
    },
  },
}));
function Iklan() {
  const styles = useStyles();
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} sm={6} lg={12} md={12}>
        <div className={styles.atas}></div>
      </Grid>
      <Grid item xs={12} sm={6} lg={12} md={12}>
        <div className={styles.bawah}></div>
      </Grid>
    </Grid>
  );
}
export default Iklan;
