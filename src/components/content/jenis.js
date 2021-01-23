import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatRupiah } from "../../redux/formatRupiah";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: 10,
    boxShadow: "0 0 0 gray",
    width: 320,
  },
  media: {
    height: 320,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  terbaru: {
    textAlign: "center",
    width: "100%",
    padding: 0,
    marginBottom: 30,
  },
  buttonCard: {
    position: "relative",
    top: 160,
    zIndex: 9999,
  },
  bottom: {
    marginBottom: 20,
  },
  lihat: {
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
  },
  terbaruText: {
    fontWeight: "normal",
  },
}));
export default function Jenis() {
  // styles
  const classes = useStyles();

  // ambil data dari reducer
  const items = useSelector((state) => state.item);
  return (
    <>
      <Grid item xs={12} className={classes.card}>
        <div className={classes.terbaru}>
          <h1 className={classes.terbaruText}>REKOMENDASI</h1>
        </div>
        {items.map((item) => {
          return (
            <>
              {item.recomendasi ? (
                <Link
                  key={item.key}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    textAlign: "left",
                  }}
                  to={{
                    pathname: `/detail/${item.nama}`,
                    state: {
                      nama: item.nama,
                      harga: item.harga,
                      gambar: item.image,
                      gambarBanyak: item.images,
                      key: item.key,
                      detail: true,
                    },
                  }}
                >
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.nama}
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.nama}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {formatRupiah(item.harga)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              ) : null}
            </>
          );
        })}
      </Grid>
      <Grid container justify="center" className={classes.bottom}>
        <Grid item>
          <Button className={classes.lihat}>LIHAT LAINNYA</Button>
        </Grid>
      </Grid>
    </>
  );
}
