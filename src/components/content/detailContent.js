import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CardShop from "./cardShopDrawer";
import { useLocation } from "react-router-dom";
import NotFound from "../notFound";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "red",
    color: "grey",
  },
  kiri: {
    // backgroundColor: "yellow",
  },
  kanan: {
    paddingLeft: 20,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: 20,
    },
  },
  img: {
    width: "100%",
  },
  name: {
    margin: 0,
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },

  ol: {
    marginTop: 10,
    paddingLeft: 20,
    margin: 0,
    textAlign: "left",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      paddingLeft: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  smallImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "grey",
    marginTop: 5,
    height: 100,
    width: 100,
  },
  smallImageContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 5,
    justifyContent: "space-between",
  },
  bigImage: {
    height: 800,
    backgroundColor: "grey",
    overflow: "hidden",
  },
}));

function DetailContent() {
  // ambil data untuk detail
  let location = useLocation();
  const styles = useStyles();

  // state small image
  const [small] = React.useState(
    location.state === undefined ? null : location.state.images
  );

  // state bigImage
  const [big, setBig] = React.useState(
    location.state === undefined ? null : location.state.gambar
  );

  // click small image
  const clickSmallImage = (image) => {
    setBig(image);
  };
  return (
    <>
      {location.state === undefined ? (
        <NotFound />
      ) : (
        <Grid container className={styles.container}>
          <Grid item lg={6} md={6} sm={12} xs={12} className={styles.kiri}>
            <div>
              <div className={styles.bigImage}>
                <img alt="" className={styles.img} src={big}></img>
              </div>
              <div className={styles.smallImageContainer}>
                {small &&
                  small.map((item) => {
                    return (
                      <div
                        key={item.key}
                        onClick={() => clickSmallImage(item.srcImage)}
                        className={styles.smallImage}
                        style={{
                          backgroundImage: "url(" + item.srcImage + ")",
                        }}
                      ></div>
                    );
                  })}
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className={styles.kanan}>
              <div>
                <h3 style={{ fontSize: 35 }} className={styles.name}>
                  {location.state === undefined ? null : location.state.nama}
                </h3>
                <h5 className={styles.name} style={{ marginTop: 10 }}>
                  Rp.
                  {location.state === undefined ? null : location.state.harga}
                </h5>
              </div>
              <div className={styles.button}>
                <CardShop
                  data={location.state === undefined ? null : location.state}
                />
              </div>
              <div style={{ marginTop: 30 }}>
                <p
                  className={styles.name}
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Material
                </p>
                <p className={styles.name}>Velvet Corduray</p>
                <p className={styles.name}>
                  ( Nyaman, tidak membuat badan barvolume, lembuat, kualitas
                  corduray terbaik )
                </p>
              </div>
              <div style={{ marginTop: 30 }}>
                <p
                  className={styles.name}
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  Info
                </p>
                <ol className={styles.ol}>
                  <li>Harap ukur sesuai detailize yang sudah di berikan</li>
                  <li>On model menggunakan size S</li>
                  <li>Tinggi badan model 160 cm</li>
                </ol>
              </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default DetailContent;
