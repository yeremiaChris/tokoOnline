import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";

function Iklan() {
  // state hover
  const [hover, setHover] = React.useState({
    display: "none",
    opacity: 1,
    hover: true,
  });

  // styles
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
      opacity: hover.opacity,
      transition: ".5s",
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
    button: {
      position: "relative",
      marginTop: -195,
      height: 195,

      alignContent: "center",
      display: hover.display,
      justifyContent: "center",
      "&:hover": {
        transform: "rotate(360deg)",
      },
      transition: "transform 0.3s",
      [theme.breakpoints.down("xs")]: {
        height: 150,
        marginTop: -150,
      },
    },
    // hover
    hover: {
      backgroundColor: "black",
      transition: "1s",
    },
    buttonView: {
      width: 100,
      color: "white",
      borderColor: "white",
    },
  }));

  // var styles
  const styles = useStyles();

  // onmouse enter
  const onMouseEnter = () => {
    setHover({
      display: "grid",
      opacity: 0.2,
    });
  };

  // onmouse leave
  const onMouseLeave = () => {
    setHover({
      display: "none",
      opacity: 1,
    });
  };
  return (
    <Grid container className={styles.container}>
      <Grid justify="center" item xs={12} sm={6} lg={12} md={12}>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <div className={styles.hover}>
            <div className={styles.atas}></div>
          </div>
          <div className={styles.button}>
            <Button className={styles.buttonView} variant="outlined">
              View
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} lg={12} md={12}>
        <div className={styles.bawah}></div>
      </Grid>
    </Grid>
  );
}
export default Iklan;
