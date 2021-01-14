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
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 10,
    boxShadow: "0 0 0 gray",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    width: 259,
    maxWidth: 259,
  },
  media: {
    height: 300,
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

export default function ItemContent() {
  // styles
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.card}>
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
              <CardContent style={{ textAlign: "left    " }}>
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
    </>
  );
}
