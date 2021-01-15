import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import Gambar from "../image/orang.jpg";
import GambarDua from "../image/kamera.jpg";

// styles
const useStyles = makeStyles((theme) => ({
  // container semuanya
  container: {
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 200,
      marginTop: 10,
    },
    [theme.breakpoints.down("xs")]: {
      height: 400,
    },
    display: "flex",
  },
  // cover iklan
  coverItem: {
    [theme.breakpoints.down("sm")]: {
      display: "grid",
    },
  },
  img: {
    objectFit: "cover",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: 195,
    "&:hover": {
      filter: "brightness(30%)",
    },
    transition: ".2s",
  },
  btn: {
    color: "white",
    borderColor: "white",
    zIndex: 1,
  },
  containerButton: {
    backgroundColor: "red",
    height: 195,
    marginBottom: -195,
    alignItems: "center",
    justifyContent: "center",
  },
}));

// inital state iklan
const iklanState = [
  {
    key: "1",
    gambar: Gambar,
    display: "none",
  },
  {
    key: "2",
    gambar: GambarDua,
    display: "none",
  },
];

function Iklan() {
  // var styles
  const styles = useStyles();

  // state iklan
  const [iklan, setIklan] = React.useState(iklanState);
  const mouseEnter = (key) => {
    setIklan(
      iklan.map((item) =>
        item.key === key ? { ...item, display: "flex" } : item
      )
    );
  };
  const mouseLeave = (key) => {
    setIklan(
      iklan.map((item) =>
        item.key === key ? { ...item, display: "none" } : item
      )
    );
  };

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
            <Grid
              key={item.key}
              className={styles.coverItem}
              item
              lg={12}
              md={12}
              sm={6}
              xs={12}
            >
              <div
                style={{ display: item.display }}
                className={styles.containerButton}
              >
                <Button className={styles.btn} variant="outlined">
                  View
                </Button>
              </div>
              <img
                onMouseEnter={() => mouseEnter(item.key)}
                onMouseLeave={() => mouseLeave(item.key)}
                alt={item.key}
                className={styles.img}
                src={item.gambar}
              ></img>
            </Grid>
          );
        })}
    </Grid>
  );
}
export default Iklan;
