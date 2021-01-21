import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import Image1 from "../../image/black.jpeg";
import Image2 from "../../image/white.jpeg";
import Image3 from "../../image/tan.jpeg";
import Image4 from "../../image/grey.jpeg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 0 gray",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: 259,
    [theme.breakpoints.down("md")]: {
      width: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 245,
    },
  },
  media: {
    height: 250,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  card: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  buttonCard: {
    position: "relative",
    top: 160,
    zIndex: 9999,
  },

  //   card
  cardItem: {
    width: 320,
    height: 320,
    backgroundImage: "url(" + Image1 + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  available: {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    padding: 1,
    width: "25%",
    marginTop: 0,
    marginBottom: 5,
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
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt White",
    harga: 52000,
    stok: 2,
    image: Image2,
    key: "2",
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt Tan",
    harga: 52000,
    stok: 2,
    image: Image3,
    key: "3",
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image4,
    key: "4",
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image1,
    key: "5",
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image2,
    key: "6",
    images: [Image1, Image2, Image3, Image4],
  },
  {
    nama: "T-Shirt Grey",
    harga: 52000,
    stok: 2,
    image: Image2,
    key: "7",
    images: [Image1, Image2, Image3, Image4],
  },
];

export default function ItemContent() {
  // styles
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.card}>
        {data.map((item) => {
          return (
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
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <p className={classes.available}>Available</p>
                  </div>
                </CardActionArea>
                <CardContent
                  style={{
                    padding: 0,
                    textAlign: "left",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.nama}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Rp {item.harga}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}
