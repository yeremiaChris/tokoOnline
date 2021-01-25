import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Iklan1 from "../image/satu.jpg";
import Iklan2 from "../image/iklan2.jpg";
import { Link } from "react-router-dom";
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
}));

// inital state iklan
const iklanState = [
  {
    key: "1",
    gambar: Iklan1,
    display: "none",
    jenis: "Shoes",
  },
  {
    key: "2",
    gambar: Iklan2,
    display: "none",
    jenis: "Shirt",
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
              <Link
                to={{
                  pathname: "/content",
                  state: {
                    nama: item.jenis,
                  },
                }}
              >
                <img
                  onMouseEnter={() => mouseEnter(item.key)}
                  onMouseLeave={() => mouseLeave(item.key)}
                  alt={item.key}
                  className={styles.img}
                  src={item.gambar}
                ></img>
              </Link>
            </Grid>
          );
        })}
    </Grid>
  );
}
export default Iklan;
