import React from "react";
import Grid from "@material-ui/core/Grid";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";
export default function iklan() {
  // style
  const styles = {
    atas: {
      backgroundColor: "red",
      height: 195,
      backgroundImage: "url(" + Gambar + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    bawah: {
      backgroundColor: "yellow",
      height: 195,
      backgroundImage: "url(" + GambarDua + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    container: {
      marginTop: 10,
      height: 400,
      alignContent: "space-between",
    },
  };
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <div style={styles.atas}></div>
      </Grid>
      <Grid item xs={12} sm={12} lg={12} md={12}>
        <div style={styles.bawah}></div>
      </Grid>
    </Grid>
  );
}
