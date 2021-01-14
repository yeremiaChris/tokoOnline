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
import Image1 from "../../image/black.jpeg";
import Image2 from "../../image/white.jpeg";
import Image3 from "../../image/tan.jpeg";
import Image4 from "../../image/grey.jpeg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 320,
    marginBottom: 10,
    boxShadow: "0 0 0 gray",
    width: 320,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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

  //   card
  cardItem: {
    backgroundColor: "red",
    width: 320,
    height: 320,
    backgroundImage: "url(" + Image1 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
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

// dummy data
const data = [
  {
    nama: "T-Shirt Black",
    harga: 52000,
    stok: 2,
    image: Image1,
    key: "1",
  },
  {
    nama: "T-Shirt White",
    harga: 52000,
    stok: 2,
    image: Image2,
    key: "2",
  },
  {
    nama: "T-Shirt Tan",
    harga: 52000,
    stok: 2,
    image: Image3,
    key: "3",
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image4,
    key: "4",
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image1,
    key: "5",
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image2,
    key: "6",
  },
];

export default function Jenis() {
  // styles
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.card}>
        <div className={classes.terbaru}>
          <h1 className={classes.terbaruText}>REKOMENDASI</h1>
        </div>
        {data.map((item) => {
          return (
            <Card className={classes.root} key={item.key}>
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
                <Typography variant="body2" color="textSecondary" component="p">
                  Rp {item.harga}
                </Typography>
              </CardContent>
            </Card>
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
